import DynamicSVGBrand from "../ DynamicSVG/LogoSVG";
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
          <DynamicSVGBrand />
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
