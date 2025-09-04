import { Container } from "./styles";
import MemberMenu from "../member-menu";
import MemberPhoto from "../member-photo";
import { UserType } from "../../../types";
type MemberButtonPropsType = {
  closeMenu: () => void;
  showMenu: boolean;
  onClick: () => void;
  user: UserType;
};

function MemberButton({
  user,
  closeMenu,
  showMenu,
  onClick,
}: MemberButtonPropsType) {
  return (
    <Container onClick={onClick}>
      <MemberPhoto
        $userPhotoWidth="30px"
        $userPhotoHeight="30px"
        $userPhotoFontSize="10px"
        $userBorderadius="50px"
        $fontWeight="600"
        user={user}
      />
      {showMenu && <MemberMenu onClose={closeMenu} />}
    </Container>
  );
}
export default MemberButton;
