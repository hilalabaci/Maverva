import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  BorderforSideBar,
  Container,
  ArrowIcon,
  ArrowContainer,
} from "./styles";

type SideBarPropsType = {
  hideMenu: boolean;
  setHideMenu: (hideMenu: boolean) => void;
  isHovered: boolean;
};
function SideBar(props: SideBarPropsType) {
  return (
    <Container>
      <BorderforSideBar></BorderforSideBar>
      <ArrowContainer $isHovered={props.isHovered}>
        <ArrowIcon
          $hidden={props.hideMenu}
          as={
            props.hideMenu
              ? KeyboardArrowRightIcon
              : KeyboardArrowLeftRoundedIcon
          }
          onClick={() => {
            props.setHideMenu(!props.hideMenu);
          }}
        />
      </ArrowContainer>
    </Container>
  );
}
export default SideBar;
