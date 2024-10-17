import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberButton from "../user/member-button";
import {
  BrandContainer,
  BrandLogo,
  HeaderContainer,
  NavbarContainer,
  Presentation,
  Projects,
  ProjectsButton,
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
import Modal from "../../actions/modal";
import Notification from "../../actions/notification";
import { useUserContext } from "../../../contexts/UserContext";
import { ProjectType, NotificationType } from "../../../types";
import OptionalBoardCreate from "../../actions/board/optional/create";
type NavbarPropsType = {
  onCreate: (project: ProjectType) => void;
};

function Navbar(props: NavbarPropsType) {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [memberMenu, setMemberMenu] = useState(false);
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
  const loadNotificatios = useCallback(async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "notification?userId=" + user?._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      setNotifications(data);
    }
  }, [user]);

  useEffect(() => {
    if (user?._id) {
      loadNotificatios();
    }
  }, [user, loadNotificatios]);

  async function markNotificationsRead() {
    const unReadNotificationIds = notifications
      .filter((n) => !n.isRead)
      .map((n) => n._id);
    if (unReadNotificationIds.length <= 0) return;
    const body = { notificationIds: unReadNotificationIds };
    const response = await fetch(
      process.env.REACT_APP_API_URL + "notification/mark-read",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      setTimeout(() => {
        setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
      }, 5000);
    }
  }

  const unReadNotificationCount = notifications.filter((n) => !n.isRead).length;
  function handleProjectsClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault(); // Tarayıcının varsayılan sayfa yenilemesini engeller
    navigate("/projects"); // Yönlendirme işlemi
  }

  return (
    <HeaderContainer>
      <NavbarContainer>
        <GlobalStyle />
        <BrandContainer>
          <BrandLogo />
          Process
        </BrandContainer>
        <Presentation>
          <Projects onClick={handleProjectsClick} href="/projects">
            <ProjectsButton>
              Projects
              <ProjectsSpan />
            </ProjectsButton>
          </Projects>
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
                // onCreate={props.onCreate}
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
            top: "60px",
            right: "70px",
            background: "none",
            transform: "none",
            left: "unset",
          }}
        >
          <NotificationContainer>
            <Title>Notification</Title>
            <NotificationWrapper>
              {notifications.map((n) => {
                return <Notification key={n._id} notification={n} />;
              })}
            </NotificationWrapper>
          </NotificationContainer>
        </Modal>

        <MemberButtonWrapper $isMemberButtonOpen={memberMenu}>
          <MemberButton
            onClick={openMemberMenu}
            closeMenu={closeMemberMenu}
            showMenu={memberMenu}
          />
        </MemberButtonWrapper>
      </NavbarLeftSideWrapper>
    </HeaderContainer>
  );
}
export default Navbar;
