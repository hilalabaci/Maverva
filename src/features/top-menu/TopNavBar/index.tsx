import { useLocation } from "react-router-dom";
import { Nav, NavLink, NavDisabled } from "./styles";

type NavItemDef = {
  label: string;
  to?: string;
  matchPath?: string;
};

type TopNavBarProps = {
  projectKey: string;
  boardId: string | undefined;
  sprintId: string | undefined;
};

function TopNavBar({ projectKey, boardId, sprintId }: TopNavBarProps) {
  const { pathname } = useLocation();
  const base = `/projects/${projectKey}/boards/${boardId}`;

  const navItems: NavItemDef[] = [
    // { label: "Summary" },
    // { label: "Timeline" },
    { label: "Backlog", to: `${base}/backlog`, matchPath: "/backlog" },
    ...(sprintId
      ? [
          {
            label: "Active sprints",
            to: `${base}/sprints/${sprintId}`,
            matchPath: "/sprints",
          },
        ]
      : []),
    // { label: "Calendar" },
    // { label: "Reports" },
    { label: "List", to: `${base}/list`, matchPath: "/list" },
    // { label: "Forms" },
    // { label: "Goals" },
    // { label: "All work" },
    // { label: "Components" },
    // { label: "Development" },
    // { label: "Code" },
    // { label: "Releases" },
    // { label: "Archived work items" },
    // { label: "Pages" },
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
            {item.label}
          </NavLink>
        ) : (
          <NavDisabled key={item.label}>{item.label}</NavDisabled>
        ),
      )}
    </Nav>
  );
}

export default TopNavBar;
