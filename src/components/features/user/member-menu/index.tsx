import React, { useState } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import ChangeThemeModal from "../../changeThemeModal";
import Modal from "../../../common/modal";
import MemberPhoto from "../member-photo";
import {
  Container,
  Title,
  Accountdetails,
  Options,
  Memberinfo,
  MemberName,
  MemberEmail,
  Logout,
  ButtonforTheme,
  ArrowforButton,
  IconforManaAccount,
} from "./styles";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

type MemberMenuProps = {
  onClose: () => void;
};

function MemberMenu(props: MemberMenuProps) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { user, setUser } = useUserContext();
  const ref = useOutsideClick<HTMLDivElement>(props.onClose);
  if (!user) {
    return null;
  }
  const userFullName = user.fullName;
  const userEmail = user.email;

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  function logOut() {
    googleLogout();
    setUser(undefined);
    navigate("/");
  }
  return (
    <Container ref={ref}>
      <Title>Account</Title>
      <Accountdetails>
        <MemberPhoto
          $userPhotoWidth="35px"
          $userPhotoHeight="35px"
          $userPhotoFontSize="15px"
          $userBorderadius="50px"
          $fontWeight="500"
        />
        <Memberinfo>
          <MemberName>{userFullName}</MemberName>
          <MemberEmail>{userEmail}</MemberEmail>
        </Memberinfo>
      </Accountdetails>
      <Options>
        Manage account <IconforManaAccount />
      </Options>
      <Options $active={showModal}>
        <Modal
          noBackdrop
          container={ref.current as Element}
          trigger={
            <ButtonforTheme onClick={openModal}>
              Theme
              <ArrowforButton />
            </ButtonforTheme>
          }
          onClose={closeModal}
          open={showModal}
          onChange={setShowModal}
          style={{
            transform: "transform: translate3d(-262px, 248.5px, 0px);",
            top: 140,
            left: "unset",
          }}
        >
          <ChangeThemeModal />
        </Modal>
      </Options>
      <Options>
        <Logout onClick={logOut}> Log out</Logout>
      </Options>
    </Container>
  );
}
export default MemberMenu;
