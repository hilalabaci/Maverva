import { useMemo, useState } from "react";
import { ProjectType } from "../../types/user.types";

export type SortKey = "name" | "lead";

export interface ProjectFilters {
  search: string;
  starred: boolean;
  leadId: string; // "" = any
  sortBy: SortKey;
}

const DEFAULT_FILTERS: ProjectFilters = {
  search: "",
  starred: false,
  leadId: "",
  sortBy: "name",
};

export function useProjectFilters(projects: ProjectType[]) {
  const [filters, setFilters] = useState<ProjectFilters>(DEFAULT_FILTERS);

  function updateFilter<K extends keyof ProjectFilters>(
    key: K,
    value: ProjectFilters[K]
  ) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  const uniqueLeads = useMemo(() => {
    const seen = new Set<string>();
    return projects
      .map((p) => p.LeadUser)
      .filter((lead) => {
        if (seen.has(lead.Id)) return false;
        seen.add(lead.Id);
        return true;
      });
  }, [projects]);

  const filtered = useMemo(() => {
    let result = projects.filter((p) => {
      const matchSearch = p.Name.toLowerCase().includes(
        filters.search.toLowerCase()
      );
      const matchStarred = filters.starred ? p.IsFavourite : true;
      const matchLead = filters.leadId ? p.LeadUser.Id === filters.leadId : true;
      return matchSearch && matchStarred && matchLead;
    });

    result = [...result].sort((a, b) => {
      if (filters.sortBy === "name") return a.Name.localeCompare(b.Name);
      if (filters.sortBy === "lead")
        return a.LeadUser.FullName.localeCompare(b.LeadUser.FullName);
      return 0;
    });

    return result;
  }, [projects, filters]);

  const activeFilterCount = [
    filters.starred,
    !!filters.leadId,
  ].filter(Boolean).length;

  return { filters, updateFilter, resetFilters, filtered, uniqueLeads, activeFilterCount };
}
