import { useCallback, useEffect, useRef, useState } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { DropdownMenu } from "../../components/ui/DropDownMenu/index";
import CloseProjectMenu from "../../features/project/close-project-menu";
import ProjectCreate from "../../features/project/project-add/create";
import ProjectAvatar from "../../features/user/project-avatar";
import Toggle from "../../components/ui/Toggle";
import MemberPhoto from "../../features/user/member-photo";
import { HoverCardDemo } from "../../components/ui/HoverCard";
import { useApplicationContext } from "../../contexts/ApplicationContext";
import Modal from "../../components/ui/Modal";
import { ProjectType } from "../../types/user.types";
import {
  getProjects,
  updateProjectToFavourite,
  deleteProject as deleteProjectApi,
} from "../../api/project-api";
import {
  Container,
  Wrapper,
  SearchWrapper,
  DataWrapper,
  Tables,
  TableTitleWrapper,
  Titles,
  TableBody,
  DataContainer,
  DataProjectsName,
  DataLeadName,
  TableHead,
  MoreIcon,
  IconWrapper,
  MoreIconButton,
  LinkforProjects,
  DataKey,
  IconFav,
  FilledIconFav,
  FavIconTable,
  PageHead,
  Breadcrumb,
  PageHeadRow,
  Header,
  SubInfo,
  PageActions,
  ActionButton,
  SummaryStrip,
  SummaryCell,
  SummaryLabel,
  SummaryValue,
  Toolbar,
  FilterChip,
  ToolbarSpacer,
  ViewSegment,
  CardWrap,
  CardFoot,
  ProjectNameText,
  ProjectTitle,
  ProjectDescription,
  UrlCell,
  StatusPill,
  UpdatedCell,
  FilterDropdownWrap,
  FilterDropdownMenu,
  FilterDropdownHeader,
  FilterDropdownOption,
  FilterDropdownOptionDot,
} from "./styled";
import Layout from "../../components/layout/templates/layout";
import { useProjectFilters, SortKey } from "./useProjectFilters";

function Projects() {
  const { user, token } = useUserContext();
  const hasFetchedProjects = useRef(false);
  const {
    setActiveSprint,
    selectedProject,
    setSelectedProject,
    setSelectedBoard,
  } = useApplicationContext();

  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [showModalforCreateButton, setShowModalforCreateButton] = useState(false);
  const [showModalforDeleteProject, setShowModalforDeleteProject] = useState(false);

  // open/close state for each dropdown
  const [leadMenuOpen, setLeadMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);

  const { filters, updateFilter, resetFilters, filtered, uniqueLeads } =
    useProjectFilters(projects);

  const loadProjects = useCallback(
    async (userId: string) => {
      try {
        if (!token) return;
        const response = await getProjects(userId, token);
        if (response && response.data) {
          setProjects(response.data);
        } else {
          throw new Error("Failed to load projects");
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    },
    [token]
  );

  useEffect(() => {
    if (!user?.Id || hasFetchedProjects.current) return;
    hasFetchedProjects.current = true;
    loadProjects(user.Id);
    // eslint-disable-next-line
  }, [user?.Id, loadProjects]);

  useEffect(() => {
    if (projects.length > 0 && !selectedProject) {
      setSelectedProject(projects[0]);
      setSelectedBoard(projects[0].Boards[0]);
    }
  }, [projects, selectedProject, setSelectedProject, setSelectedBoard]);

  function addProject(project: ProjectType) {
    setProjects((prev) => [...prev, project]);
  }

  function onDelete(id: string) {
    setProjects((prev) => prev.filter((p) => p.Id !== id));
  }

  async function deleteProject(projectId: string, userId: string) {
    try {
      if (!token) return;
      const response = await deleteProjectApi(projectId, userId, token);
      if (response) onDelete(projectId);
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  }

  async function handleToggleFavourite(projectId: string, isFavourite: boolean) {
    if (!user || !token) return;
    try {
      const updated = await updateProjectToFavourite(projectId, user.Id, isFavourite, token);
      if (updated) {
        setProjects((prev) =>
          prev.map((p) => (p.Id === projectId ? { ...p, IsFavourite: isFavourite } : p))
        );
      }
    } catch (error) {
      console.error("Failed to update favourite status:", error);
    }
  }

  function openDeleteModal(project: ProjectType) {
    setShowModalforDeleteProject(true);
    setSelectedProject(project);
  }

  const SORT_LABELS: Record<SortKey, string> = { name: "Name", lead: "Lead" };
  const selectedLeadName = uniqueLeads.find((l) => l.Id === filters.leadId)?.FullName;

  if (!user) return null;
  return (
    <Layout onProjectCrate={addProject}>
      <Container>
        <Wrapper>
          {/* ── page header ── */}
          <PageHead>
            <Breadcrumb>
              <span>— Workspace</span>
              <span style={{ opacity: 0.5 }}>/</span>
              <b>Projects</b>
            </Breadcrumb>
            <PageHeadRow>
              <div>
                <Header>
                  <em>Projects.</em>
                </Header>
                <SubInfo>
                  <span>Workspace: <b>{user.FullName?.split(" ")[0] ?? "My"}</b></span>
                  <span>· <b>{projects.length}</b> projects</span>
                  <span>· <b>{uniqueLeads.length}</b> leads</span>
                </SubInfo>
              </div>
              <PageActions>
                <Modal
                  trigger={
                    <ActionButton $primary onClick={() => setShowModalforCreateButton(true)}>
                      + Create project
                    </ActionButton>
                  }
                  open={showModalforCreateButton}
                  onChange={setShowModalforCreateButton}
                  onClose={() => setShowModalforCreateButton(false)}
                >
                  <ProjectCreate
                    isOptional={false}
                    onCreate={addProject}
                    onClose={() => setShowModalforCreateButton(false)}
                    projectKey={selectedProject?.Key}
                    BackButton={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </Modal>
              </PageActions>
            </PageHeadRow>

            <SummaryStrip>
              <SummaryCell>
                <SummaryLabel>Total</SummaryLabel>
                <SummaryValue>{projects.length}<small>projects</small></SummaryValue>
              </SummaryCell>
              <SummaryCell>
                <SummaryLabel>Active</SummaryLabel>
                <SummaryValue $color="#166534">{projects.length}<small>shipping</small></SummaryValue>
              </SummaryCell>
              <SummaryCell>
                <SummaryLabel>Favourites</SummaryLabel>
                <SummaryValue $color="#1E40AF">{projects.filter((p) => p.IsFavourite).length}</SummaryValue>
              </SummaryCell>
              <SummaryCell>
                <SummaryLabel>Leads</SummaryLabel>
                <SummaryValue $color="#74767D">{uniqueLeads.length}</SummaryValue>
              </SummaryCell>
            </SummaryStrip>
          </PageHead>

          {/* ── toolbar ── */}
          <Toolbar>
            {/* Search */}
            <SearchWrapper>
              <span style={{ opacity: 0.6 }}>🔍</span>
              <input
                placeholder="Search projects by name or key…"
                value={filters.search}
                onChange={(e) => updateFilter("search", e.target.value)}
              />
              {filters.search && (
                <button
                  style={{ background: "none", border: 0, cursor: "pointer", opacity: 0.5, padding: 0 }}
                  onClick={() => updateFilter("search", "")}
                >
                  ×
                </button>
              )}
            </SearchWrapper>

            {/* All / Starred */}
            <FilterChip $active={!filters.starred} onClick={() => updateFilter("starred", false)}>
              All
            </FilterChip>
            <FilterChip $active={filters.starred} onClick={() => updateFilter("starred", true)}>
              ⭐ Starred
            </FilterChip>

            {/* Lead dropdown */}
            <FilterDropdownWrap>
              <FilterChip
                $active={!!filters.leadId}
                onClick={() => { setLeadMenuOpen((o) => !o); setSortMenuOpen(false); }}
              >
                Lead: {selectedLeadName ?? "Anyone"} ▾
              </FilterChip>
              <FilterDropdownMenu $open={leadMenuOpen}>
                <FilterDropdownHeader>Filter by lead</FilterDropdownHeader>
                <FilterDropdownOption
                  $active={!filters.leadId}
                  onClick={() => { updateFilter("leadId", ""); setLeadMenuOpen(false); }}
                >
                  <FilterDropdownOptionDot $active={!filters.leadId} />
                  Anyone
                </FilterDropdownOption>
                {uniqueLeads.map((lead) => (
                  <FilterDropdownOption
                    key={lead.Id}
                    $active={filters.leadId === lead.Id}
                    onClick={() => { updateFilter("leadId", lead.Id); setLeadMenuOpen(false); }}
                  >
                    <FilterDropdownOptionDot $active={filters.leadId === lead.Id} />
                    {lead.FullName}
                  </FilterDropdownOption>
                ))}
              </FilterDropdownMenu>
            </FilterDropdownWrap>

            {/* Reset filters */}
            {(filters.starred || filters.leadId || filters.search) && (
              <FilterChip onClick={resetFilters} style={{ opacity: 0.6 }}>
                ✕ Reset
              </FilterChip>
            )}

            <ToolbarSpacer />

            {/* View segment */}
            <ViewSegment>
              <button className="active">≡ List</button>
              <button>▦ Grid</button>
            </ViewSegment>

            {/* Sort dropdown */}
            <FilterDropdownWrap>
              <FilterChip
                $active={false}
                onClick={() => { setSortMenuOpen((o) => !o); setLeadMenuOpen(false); }}
              >
                Sort: {SORT_LABELS[filters.sortBy]} ▾
              </FilterChip>
              <FilterDropdownMenu $open={sortMenuOpen} style={{ left: "auto", right: 0 }}>
                <FilterDropdownHeader>Sort by</FilterDropdownHeader>
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <FilterDropdownOption
                    key={key}
                    $active={filters.sortBy === key}
                    onClick={() => { updateFilter("sortBy", key); setSortMenuOpen(false); }}
                  >
                    <FilterDropdownOptionDot $active={filters.sortBy === key} />
                    {SORT_LABELS[key]}
                  </FilterDropdownOption>
                ))}
              </FilterDropdownMenu>
            </FilterDropdownWrap>
          </Toolbar>

          {/* ── table ── */}
          <DataContainer>
            <CardWrap>
              <Tables>
                <TableHead>
                  <TableTitleWrapper>
                    <IconWrapper><FavIconTable /></IconWrapper>
                    <Titles>Name</Titles>
                    <Titles>Key</Titles>
                    <Titles>Lead</Titles>
                    <Titles>Project URL</Titles>
                    <Titles>Status</Titles>
                    <Titles>Updated</Titles>
                    <Titles />
                  </TableTitleWrapper>
                </TableHead>
                <TableBody>
                  {filtered.map((project) => (
                    <DataWrapper key={project.Id}>
                      <IconWrapper>
                        <Toggle
                          isActive={project.IsFavourite}
                          activeIcon={<FilledIconFav />}
                          icon={<IconFav />}
                          onToggle={(newState) => handleToggleFavourite(project.Id, newState)}
                        />
                      </IconWrapper>
                      <DataProjectsName>
                        <ProjectAvatar
                          $userPhotoWidth="28px"
                          $userPhotoHeight="28px"
                          $userPhotoFontSize="10px"
                          $userBorderadius="6px"
                          $fontWeight="600"
                          projectKey={project.Key}
                        />
                        <ProjectNameText>
                          <ProjectTitle>
                            <LinkforProjects
                              to={`/projects/${project.Key}/boards/${project.Boards[0].Id}/sprints/${
                                project.Boards[0].Sprints?.find((s) => s.IsActive)?.Id ||
                                project.Boards[0].Sprints[0]?.Id
                              }`}
                              onClick={() => {
                                const activeSprint =
                                  project.Boards[0].Sprints?.find((s) => s.IsActive) ||
                                  project.Boards[0].Sprints[0];
                                setSelectedProject(project);
                                setSelectedBoard(project.Boards[0]);
                                setActiveSprint(activeSprint || undefined);
                              }}
                            >
                              {project.Name}
                            </LinkforProjects>
                          </ProjectTitle>
                          <ProjectDescription>{project.Key}</ProjectDescription>
                        </ProjectNameText>
                      </DataProjectsName>
                      <DataKey>{project.Key}</DataKey>
                      <DataLeadName>
                        <HoverCardDemo
                          src={project.LeadUser.ProfilePicture}
                          fullName={project.LeadUser.FullName}
                          email={project.LeadUser.Email}
                          trigger={
                            <MemberPhoto
                              $userPhotoWidth="24px"
                              $userPhotoHeight="24px"
                              $userPhotoFontSize="10px"
                              $userBorderadius="50px"
                              $fontWeight="600"
                              user={project.LeadUser}
                            />
                          }
                        />
                        <span>{project.LeadUser.FullName}</span>
                      </DataLeadName>
                      <UrlCell $empty>—</UrlCell>
                      <div><StatusPill $status="active">Active</StatusPill></div>
                      <UpdatedCell>—</UpdatedCell>
                      <IconWrapper>
                        <DropdownMenu
                          trigger={
                            <MoreIconButton className="dropdown-trigger">
                              <MoreIcon />
                            </MoreIconButton>
                          }
                          items={[
                            { label: "Move to trash", action: () => openDeleteModal(project) },
                            { label: "Archive", action: () => console.log("Archive") },
                          ]}
                        />
                      </IconWrapper>
                    </DataWrapper>
                  ))}
                </TableBody>
              </Tables>
              <CardFoot>
                <span>Showing {filtered.length} of {projects.length} projects</span>
              </CardFoot>
            </CardWrap>
          </DataContainer>

          {selectedProject && (
            <Modal
              trigger={<></>}
              onClose={() => setShowModalforDeleteProject(false)}
              open={showModalforDeleteProject}
              onChange={setShowModalforDeleteProject}
            >
              <CloseProjectMenu
                onDelete={() => {
                  deleteProject(selectedProject.Id, user.Id);
                  setShowModalforDeleteProject(false);
                }}
                onClose={() => setShowModalforDeleteProject(false)}
                projectName={selectedProject.Name}
              />
            </Modal>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
}
export default Projects;
