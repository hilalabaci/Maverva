import { useLocation } from "react-router-dom";
import { Nav, NavLink, NavDisabled, NavCount } from "./styles";

type NavItemDef = {
  label: string;
  to?: string;
  matchPath?: string;
  count?: number;
};

type TopNavBarProps = {
  projectKey: string;
  boardId: string | undefined;
  sprintId: string | undefined;
  activeCount?: number;
};

function TopNavBar({ projectKey, boardId, sprintId, activeCount = 0 }: TopNavBarProps) {
  const { pathname } = useLocation();
  const base = `/projects/${projectKey}/boards/${boardId}`;

  const navItems: NavItemDef[] = [
    { label: "Backlog", to: `${base}/backlog`, matchPath: "/backlog" },
    ...(sprintId
      ? [
          {
            label: "Active sprint",
            to: `${base}/sprints/${sprintId}`,
            matchPath: "/sprints",
            count: activeCount,
          },
        ]
      : []),
    { label: "Timeline" },
    { label: "List", to: `${base}/list`, matchPath: "/list" },
    { label: "Reports" },
  ];

  return (
    <Nav>
      {navItems.map((item) =>
        item.to ? (
          <NavLink
            key={item.label}
            to={item.to}
            $active={!!item.matchPath && pathname.includes(item.matchPath)}
          >
            <span>{item.label}</span>
            {typeof item.count === "number" ? <NavCount>{item.count}</NavCount> : null}
          </NavLink>
        ) : (
          <NavDisabled key={item.label}>{item.label}</NavDisabled>
        ),
      )}
    </Nav>
  );
}

export default TopNavBar;
