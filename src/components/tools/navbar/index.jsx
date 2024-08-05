import React, { useEffect, useState } from "react";
import MemberButton from "../user/member-button";

import {
  BrandContainer,
  BrandLogo,
  NavbarContainer,
  GlobalStyle,
  SearchUser,
  LightMode,
  DarkMode,
  ButtonNotification,
  IconNotification,
  NotificationCount,
} from "./styles";
import { Button } from "@mui/material";
import { useTheme } from "../../../contexts/ThemeContext";
import Search from "../search";
import Modal from "../../actions/modal";
import Notification from "../../actions/notification";
import { useUserContext } from "../../../contexts/UserContext";

function Navbar(props) {
  const { user } = useUserContext();
  const { changeMode, mode, theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  function openModal() {
    if (!showModal) setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    loadNotificatios();
  }, []);

  const unReadNotificationCount = notifications.filter((n) => !n.isRead).length;

  async function loadNotificatios() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "notification?userId=" + user._id,
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
  }
  return (
    <NavbarContainer color={theme.primary}>
      <GlobalStyle />
      <BrandContainer>
        <BrandLogo />
        PROCESS
      </BrandContainer>
      <SearchUser>
        <Search onSearch={props.onSearch} />
        <ButtonNotification
          onClick={() => {
            !showModal ? openModal() : closeModal();
          }}
        >
          {unReadNotificationCount > 0 && (
            <NotificationCount>{unReadNotificationCount}</NotificationCount>
          )}

          <IconNotification />
        </ButtonNotification>
        <Button
          onClick={() => {
            changeMode(mode === "light" ? "dark" : "light");
          }}
        >
          {mode === "light" ? <DarkMode /> : <LightMode />}
        </Button>
        <MemberButton />
      </SearchUser>
      {showModal && (
        <Modal
          onClose={closeModal}
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-end",
            top: "61px",
            right: "4px",
            background: "none",
          }}
        >
          {notifications.map((n) => {
            return <Notification notification={n} />;
          })}
        </Modal>
      )}
    </NavbarContainer>
  );
}
export default Navbar;
