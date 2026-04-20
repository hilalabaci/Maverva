import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectAvatar from "../../user/project-avatar";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import BoardSection from "./BoardSection";
import { useProjectBoards } from "./useProjectBoards";
import { NavItem, ProjectMenuPropsType } from "./types";
import Modal from "../../../components/ui/Modal";
import OptionalBoardCreate from "../../board/optional/create";
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
  SidebarSearch,
  SidebarSectionHead,
  SideFooter,
  SidebarIco,
  IconChevronRight,
} from "./styles";

const NAV_ITEMS: NavItem[] = [
  { to: "/for-you", match: "/for-you", label: "My work" },
  { to: "/recent", match: "/recent", label: "Recent", hasChevron: true },
  { to: "/starred", match: "/starred", label: "Starred", hasChevron: true },
  { to: "/drafts", match: "/drafts", label: "Drafts" },
];

function ProjectMenu({ hideMenu, onHover, projectKey }: ProjectMenuPropsType) {
  const location = useLocation();
  const { selectedProject } = useApplicationContext();
  const { boards, recentBoards, selectedBoard, addToRecent } =
    useProjectBoards(projectKey);
  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);

  return (
    <Container
      $hidden={hideMenu}
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      <UserInfo $hidden={hideMenu}>
        <ProjectAvatar
          $hidden={hideMenu}
          $userPhotoWidth="22px"
          $userPhotoHeight="22px"
          $userPhotoFontSize="10px"
          $userBorderadius="4px"
          $fontWeight="600"
          projectKey={projectKey}
        />
        <div style={{ flex: 1, minWidth: 0, display: hideMenu ? 'none' : 'block' }}>
          <ProjectTitle $hidden={hideMenu}>{selectedProject?.Name}</ProjectTitle>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: '11px', color: 'var(--app-ink-3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Workspace
          </div>
        </div>
      </UserInfo>

      <SidebarSearch $hidden={hideMenu}>
        <span>Search</span>
        <span className="k">⌘K</span>
      </SidebarSearch>

      <Wrapper>
        <SideBarListWrapper $hidden={hideMenu}>
          {NAV_ITEMS.map(({ to, match, label, hasChevron }) => (
            <SideBarElement key={match} to={to}>
              <SideBarElementWrapper selected={location.pathname.includes(match)}>
                <SideBarElementIcon>
                  <SidebarIco />
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

        <SidebarSectionHead $hidden={hideMenu}>
          <span>Boards</span>
          <Modal
            open={showCreateBoardModal}
            onChange={setShowCreateBoardModal}
            onClose={() => setShowCreateBoardModal(false)}
            trigger={
              <span
                className="plus"
                onClick={() => setShowCreateBoardModal(true)}
              >
                +
              </span>
            }
          >
            <OptionalBoardCreate
              handleProjectCreate={() => {}}
              onClose={() => setShowCreateBoardModal(false)}
            />
          </Modal>
        </SidebarSectionHead>

        <BoardSection
          title=""
          boards={boards}
          selectedBoardId={selectedBoard?.Id}
          hideMenu={hideMenu}
          projectKey={projectKey}
          onBoardClick={addToRecent}
        />

        {recentBoards.length > 0 && (
          <>
            <SidebarSectionHead $hidden={hideMenu}>
              <span>Recent</span>
            </SidebarSectionHead>
            <BoardSection
              title=""
              boards={recentBoards}
              selectedBoardId={selectedBoard?.Id}
              hideMenu={hideMenu}
              projectKey={projectKey}
            />
          </>
        )}
      </Wrapper>

      <SideFooter $hidden={hideMenu}>
        <span className="av">{selectedProject?.Name?.slice(0, 2)?.toUpperCase() ?? 'MV'}</span>
        <div className="who">
          <b>{selectedProject?.Name}</b>
          <span>{projectKey}</span>
        </div>
      </SideFooter>
    </Container>
  );
}

export default ProjectMenu;
