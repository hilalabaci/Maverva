import React, { useState } from "react";
import { Container, UserInitials } from "./styles";
import { useUserContext } from "../../../../contexts/UserContext";
import MemberMenu from "../member-menu";

function MemberButton() {
  const { user } = useUserContext();
  const userFullName = user.fullName;
  const chars = userFullName.split(" ");
  const firstName = chars[0];
  const lastName = chars.length > 1 ? chars[1] : "";

  const [showMenu, setShowMenu] = useState(false);
  function openMenu() {
    setShowMenu(true);
  }
  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <Container onClick={openMenu}>
      {showMenu && <MemberMenu onClose={closeMenu} />}
      <UserInitials>
        {firstName[0]}
        {lastName[0]}
      </UserInitials>
    </Container>
  );
}
export default MemberButton;
