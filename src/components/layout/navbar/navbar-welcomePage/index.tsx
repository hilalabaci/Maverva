import DynamicSVGBrand from "../../../ DynamicSVG/LogoSVG";
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
        <ButtonForLogintonNavbar href="/login">Log in</ButtonForLogintonNavbar>
        <ButtonForGetStartonNavbar href="/register">
          Get it free
        </ButtonForGetStartonNavbar>
      </NavbarSignWrapper>
    </NavbarContainer>
  );
}
export default Navbar;
