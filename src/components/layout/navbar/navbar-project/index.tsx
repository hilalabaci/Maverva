import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../ui/Modal";
import { useUserContext } from "../../../../contexts/UserContext";
import { ProjectType, NotificationType } from "../../../../types";
import OptionalBoardCreate from "../../../../features/board/optional/create";
import Notification from "../../../../features/notification";
import MemberButton from "../../../../features/user/member-button";
import DynamicSVGBrand from "../../../../assets/icons/logo-svg";
import {
  BrandContainer,
  HeaderContainer,
  NavbarContainer,
  Presentation,
  ProjectsLink,
  ProjectsSpan,
  GlobalStyle,
  NavbarLeftSideWrapper,
  IconNotification,
  NotificationCount,
  NotificationContainer,
  NotificationWrapper,
  Title,
  ButtonforNotification,
  CreateWrapper,
  CreateButton,
  MemberButtonWrapper,
} from "./styles";
import {
  getNotifications,
  markNotificationsReadApi,
} from "../../../../api/notification-api";
import { useIsMobile } from "../../../../hooks/useBreakpoint";
type NavbarPropsType = {
  handleProjectCreate: (project: ProjectType) => void;
};

function Navbar(props: NavbarPropsType) {
  const { user, token } = useUserContext();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [memberMenu, setMemberMenu] = useState(false);
  const hasFetchedNotifications = useRef(false);
  function openMemberMenu() {
    setMemberMenu(true);
  }
  function closeMemberMenu() {
    setMemberMenu(false);
  }

  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);

  function openModalforCreateButton() {
    setShowModalforCreateButton(true);
  }
  function closeModalforCreateButton() {
    setShowModalforCreateButton(false);
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
  function handleProjectsClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate("/projects");
  }

  return (
    <HeaderContainer>
      <NavbarContainer>
        <GlobalStyle />
        <BrandContainer>
          <DynamicSVGBrand width={isMobile ? "100" : "120"} height="30" />
        </BrandContainer>
        <Presentation>
          <ProjectsLink to="/projects" onClick={handleProjectsClick}>
            Projects
            <ProjectsSpan />
          </ProjectsLink>
          <CreateWrapper>
            <Modal
              onClose={closeModalforCreateButton}
              open={showModalforCreateButton}
              trigger={
                <CreateButton onClick={openModalforCreateButton}>
                  Create
                </CreateButton>
              }
              onChange={setShowModalforCreateButton}
            >
              <OptionalBoardCreate
                handleProjectCreate={props.handleProjectCreate}
                onClose={closeModalforCreateButton}
              />
            </Modal>
          </CreateWrapper>
        </Presentation>
      </NavbarContainer>
      <NavbarLeftSideWrapper>
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
            <Title>Notification</Title>
            <NotificationWrapper>
              {notifications.map((n) => {
                return <Notification key={n.Id} notification={n} />;
              })}
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
