import { useMemo } from "react";
import { IssueStatus, IssueType } from "../../types/user.types";
import {
  SprintStrip,
  SprintStripCell,
  SprintProgress,
  SprintProgressBar,
  SprintProgressFill,
  SprintProgressNumber,
} from "./styles";

type SprintStripStatsProps = {
  sprintIssues: IssueType[];
};

type StatCellProps = {
  label: string;
  value: number;
  sub: string;
  color?: string;
};

function StatCell({ label, value, sub, color }: StatCellProps) {
  return (
    <SprintStripCell>
      <div className="k">{label}</div>
      <div className="v" style={color ? { color } : undefined}>
        {value}<small>{sub}</small>
      </div>
    </SprintStripCell>
  );
}

function SprintStripStats({ sprintIssues }: SprintStripStatsProps) {
  const stats = useMemo(() => {
    const committed = sprintIssues.length;
    const doneCount = sprintIssues.filter((i) => i.Status === IssueStatus.Done).length;
    const completedPct = committed > 0 ? Math.round((doneCount / committed) * 100) : 0;

    return {
      committed,
      doneCount,
      completedPct,
      inProgressCount: sprintIssues.filter((i) => i.Status === IssueStatus.InProgress).length,
      todoCount: sprintIssues.filter((i) => i.Status === IssueStatus.ToDo).length,
      unassignedCount: sprintIssues.filter((i) => !i.AssigneeUser).length,
    };
  }, [sprintIssues]);

  return (
    <SprintStrip>
      <StatCell label="Committed"  value={stats.committed}     sub="issues" />
      <StatCell label="Completed"  value={stats.doneCount}     sub={`${stats.completedPct}%`} color="var(--app-ok)" />
      <StatCell label="In progress" value={stats.inProgressCount} sub="live"  color="var(--app-info)" />
      <StatCell label="Remaining"  value={stats.todoCount}     sub="to do" />
      <StatCell label="Unassigned" value={stats.unassignedCount} sub="items" />
      <SprintProgress>
        <SprintProgressBar>
          <SprintProgressFill $width={stats.completedPct} />
        </SprintProgressBar>
        <SprintProgressNumber>{stats.completedPct}%</SprintProgressNumber>
      </SprintProgress>
    </SprintStrip>
  );
}

export default SprintStripStats;
