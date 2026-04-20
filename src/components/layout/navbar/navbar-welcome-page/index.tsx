import DynamicSVGBrand from "../../../../assets/icons/logo-svg";
import {
  BrandContainer,
  BrandWrapper,
  ButtonForGetStartonNavbar,
  ButtonForLogintonNavbar,
  NavbarContainer,
  NavbarSignWrapper,
} from "./styles";

function Navbar() {
  return (
    <NavbarContainer>
      <BrandWrapper>
        <BrandContainer href="/">
          <DynamicSVGBrand width="150" height="40" />
        </BrandContainer>
      </BrandWrapper>
      <NavbarSignWrapper>
        <ButtonForGetStartonNavbar href="/register">
          Get it free
        </ButtonForGetStartonNavbar>
        <ButtonForLogintonNavbar href="/login">Log in</ButtonForLogintonNavbar>
      </NavbarSignWrapper>
    </NavbarContainer>
  );
}
export default Navbar;
