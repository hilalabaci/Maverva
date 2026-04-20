import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../ui/Modal";
import { useUserContext } from "../../../../contexts/UserContext";
import { ProjectType, NotificationType } from "../../../../types";
import Notification from "../../../../features/notification";
import { GroupLabel } from "../../../../features/notification/styles";
import MemberButton from "../../../../features/user/member-button";
import { addIssue } from "../../../../api/issue-api";
import { RouteParams } from "../../../../types/auth.types";
import { useApplicationContext } from "../../../../contexts/ApplicationContext";
import {
  BrandMark,
  BrandDot,
  HeaderContainer,
  ProjectsLink,
  GlobalStyle,
  NavbarLeftSideWrapper,
  IconNotification,
  NotificationCount,
  NotificationContainer,
  NotificationWrapper,
  Title,
  ButtonforNotification,
  MemberButtonWrapper,
  NavbarCrumb,
  TopbarPrimaryBtn,
} from "./styles";
import {
  getNotifications,
  markNotificationsReadApi,
} from "../../../../api/notification-api";
import { useIsMobile } from "../../../../hooks/useBreakpoint";
import { groupNotifications } from "./helpers";

type NavbarPropsType = {
  handleProjectCreate: (project: ProjectType) => void;
};

function Navbar(props: NavbarPropsType) {
  const { user, token } = useUserContext();
  const navigate = useNavigate();
  const { projectKey, boardId } = useParams<RouteParams>();
  const { setIssues, activeSprint } = useApplicationContext();
  const isMobile = useIsMobile();
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [memberMenu, setMemberMenu] = useState(false);
  const hasFetchedNotifications = useRef(false);
  const [showCreateIssueModal, setShowCreateIssueModal] = useState(false);
  const [issueContent, setIssueContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleCreateIssue(e: React.FormEvent) {
    e.preventDefault();
    if (!issueContent.trim() || !token || !user?.Id) return;
    setIsSubmitting(true);
    try {
      const sprintId = activeSprint?.Id;
      const { ok, data } = await addIssue(
        {
          content: issueContent,
          status: 1,
          userId: user.Id,
          projectKey: projectKey,
          boardId: boardId,
          sprintId: sprintId,
        },
        token
      );
      if (ok && data) {
        setIssues((prev) => (prev ? [...prev, data as any] : [data as any]));
        setIssueContent("");
        setShowCreateIssueModal(false);
      }
    } catch (err) {
      console.error("Error creating issue:", err);
    } finally {
      setIsSubmitting(false);
    }
  }
  function openMemberMenu() {
    setMemberMenu(true);
  }
  function closeMemberMenu() {
    setMemberMenu(false);
  }


  function closeModal() {
    setShowModal(false);
  }
  function toggleModal() {
    setShowModal(!showModal);

    if (!showModal && unReadNotificationCount > 0) {
      markNotificationsRead();
    }
  }
  const loadNotifications = useCallback(async () => {
    if (!user?.Id || !token) return;
    try {
      const response = await getNotifications(user.Id, token);
      if (response.ok && response.data) {
        setNotifications(response.data);
      }
    } catch (error) {
      console.error("Error loading notifications:", error);
    }
  }, [user, token]);

  useEffect(() => {
    if (!user?.Id || hasFetchedNotifications.current) return;
    hasFetchedNotifications.current = true;
    loadNotifications();
  }, [user, loadNotifications]);

  async function markNotificationsRead() {
    const unReadNotificationIds = notifications
      .filter((n) => !n.IsRead)
      .map((n) => n.Id);
    if (unReadNotificationIds.length <= 0) return;
    //const data = { notificationIds: unReadNotificationIds };
    const response = await markNotificationsReadApi(
      {
        unReadNotificationIds: unReadNotificationIds,
        userId: user?.Id || "",
      },
      token || ""
    );
    if (response) {
      setTimeout(() => {
        setNotifications(notifications.map((n) => ({ ...n, IsRead: true })));
      }, 5000);
    }
    // const response = await fetch(
    //   process.env.REACT_APP_API_URL + "notification/mark-read",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
  }

  const unReadNotificationCount = notifications.filter((n) => !n.IsRead).length;
  const notificationGroups = groupNotifications(notifications);

  function handleProjectsClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate("/projects");
  }

  return (
    <HeaderContainer>
      <GlobalStyle />
      <NavbarCrumb>
        <ProjectsLink to="/projects" onClick={handleProjectsClick}>
          <BrandMark>
            <BrandDot />
          </BrandMark>
          <b style={{ marginLeft: 6 }}>Maverva</b>
        </ProjectsLink>
        <span className="sep">/</span>
        <span>Board</span>
      </NavbarCrumb>
      <NavbarLeftSideWrapper>
        <Modal
          open={showCreateIssueModal}
          onChange={setShowCreateIssueModal}
          onClose={() => { setShowCreateIssueModal(false); setIssueContent(""); }}
          trigger={
            <TopbarPrimaryBtn onClick={() => setShowCreateIssueModal(true)}>
              Create issue
            </TopbarPrimaryBtn>
          }
        >
          <div style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            minWidth: "360px",
          }}>
            <div style={{ fontWeight: 600, fontSize: "16px", color: "var(--app-ink)" }}>Create issue</div>
            <form onSubmit={handleCreateIssue} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <input
                autoFocus
                value={issueContent}
                onChange={(e) => setIssueContent(e.target.value)}
                placeholder="What needs to be done?"
                style={{
                  padding: "8px 10px",
                  border: "1px solid var(--app-line-2)",
                  borderRadius: "5px",
                  fontSize: "13.5px",
                  background: "var(--app-card)",
                  color: "var(--app-ink)",
                  outline: "none",
                  width: "100%",
                }}
              />
              <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                <button
                  type="button"
                  onClick={() => { setShowCreateIssueModal(false); setIssueContent(""); }}
                  style={{
                    padding: "6px 12px",
                    border: "1px solid var(--app-line)",
                    borderRadius: "5px",
                    fontSize: "12.5px",
                    background: "var(--app-card)",
                    color: "var(--app-ink-2)",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <TopbarPrimaryBtn type="submit" disabled={isSubmitting || !issueContent.trim()}>
                  {isSubmitting ? "Creating…" : "Create"}
                </TopbarPrimaryBtn>
              </div>
            </form>
          </div>
        </Modal>
        <Modal
          open={showModal}
          noBackdrop
          onChange={setShowModal}
          trigger={
            <ButtonforNotification
              $isNotificationModalOpen={showModal}
              onClick={toggleModal}
            > 
              {unReadNotificationCount > 0 && (
                <NotificationCount>{unReadNotificationCount}</NotificationCount>
              )}
              <IconNotification $isNotificationModalOpen={showModal} />
            </ButtonforNotification>
          }
          onClose={closeModal}
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-end",
            top: isMobile ? "50px" : "60px",
            right: isMobile ? "0px" : "70px",
            background: "none",
            transform: "none",
            left: "unset",
          }}
        >
          <NotificationContainer>
            <Title>Notifications</Title>
            <NotificationWrapper>
              {notificationGroups.map(
                ({ label, items }) =>
                  items.length > 0 && (
                    <div key={label}>
                      <GroupLabel>{label}</GroupLabel>
                      {items.map((n) => (
                        <Notification key={n.Id} notification={n} />
                      ))}
                    </div>
                  )
              )}
            </NotificationWrapper>
          </NotificationContainer>
        </Modal>

        <MemberButtonWrapper $isMemberButtonOpen={memberMenu}>
          {user && (
            <MemberButton
              onClick={openMemberMenu}
              closeMenu={closeMemberMenu}
              showMenu={memberMenu}
              user={user}
            />
          )}
        </MemberButtonWrapper>
      </NavbarLeftSideWrapper>
    </HeaderContainer>
  );
}
export default Navbar;
