import { Container } from "./styles";
import MemberMenu from "../member-menu";
import MemberPhoto from "../member-photo";
type MemberButtonPropsType = {
  closeMenu: () => void;
  showMenu: boolean;
  onClick: () => void;
};

function MemberButton(props: MemberButtonPropsType) {
  return (
    <Container onClick={props.onClick}>
      <MemberPhoto
        $userPhotoWidth="30px"
        $userPhotoHeight="30px"
        $userPhotoFontSize="10px"
        $userBorderadius="50px"
        $fontWeight="600"
      />
      {props.showMenu && <MemberMenu onClose={props.closeMenu} />}
    </Container>
  );
}
export default MemberButton;
