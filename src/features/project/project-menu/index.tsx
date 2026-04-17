import { useLocation } from "react-router-dom";
import ProjectAvatar from "../../user/project-avatar";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import BoardSection from "./BoardSection";
import { useProjectBoards } from "./useProjectBoards";
import { NavItem, ProjectMenuPropsType } from "./types";
import {
  Container,
  Wrapper,
  UserInfo,
  ProjectTitle,
  SideBarElement,
  SideBarElementWrapper,
  SideBarElementIcon,
  SideBarElementChevron,
  SideBarListWrapper,
  IconForYou,
  IconRecent,
  IconStarred,
  IconChevronRight,
} from "./styles";

const NAV_ITEMS: NavItem[] = [
  { to: "/for-you", match: "/for-you", label: "For you", Icon: IconForYou },
  { to: "/recent", match: "/recent", label: "Recent", Icon: IconRecent, hasChevron: true },
  { to: "/starred", match: "/starred", label: "Starred", Icon: IconStarred, hasChevron: true },
];

function ProjectMenu({ hideMenu, onHover, projectKey }: ProjectMenuPropsType) {
  const location = useLocation();
  const { selectedProject } = useApplicationContext();
  const { boards, recentBoards, selectedBoard, addToRecent } =
    useProjectBoards(projectKey);

  return (
    <Container
      $hidden={hideMenu}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <Wrapper>
        <UserInfo $hidden={hideMenu}>
          <ProjectAvatar
            $hidden={hideMenu}
            $userPhotoWidth="30px"
            $userPhotoHeight="30px"
            $userPhotoFontSize="1px"
            $userBorderadius="3px"
            $fontWeight="600"
            projectKey={projectKey}
          />
          <ProjectTitle $hidden={hideMenu}>
            {selectedProject?.Name}
          </ProjectTitle>
        </UserInfo>

        <SideBarListWrapper $hidden={hideMenu}>
          {NAV_ITEMS.map(({ to, match, label, Icon, hasChevron }) => (
            <SideBarElement key={match} to={to}>
              <SideBarElementWrapper selected={location.pathname.includes(match)}>
                <SideBarElementIcon>
                  <Icon />
                </SideBarElementIcon>
                {label}
                {hasChevron && (
                  <SideBarElementChevron>
                    <IconChevronRight />
                  </SideBarElementChevron>
                )}
              </SideBarElementWrapper>
            </SideBarElement>
          ))}
        </SideBarListWrapper>

        <BoardSection
          title="Starred"
          boards={boards}
          selectedBoardId={selectedBoard?.Id}
          hideMenu={hideMenu}
          projectKey={projectKey}
          onBoardClick={addToRecent}
        />

        {recentBoards.length > 0 && (
          <BoardSection
            title="Recent"
            boards={recentBoards}
            selectedBoardId={selectedBoard?.Id}
            hideMenu={hideMenu}
            projectKey={projectKey}
          />
        )}
      </Wrapper>
    </Container>
  );
}

export default ProjectMenu;
