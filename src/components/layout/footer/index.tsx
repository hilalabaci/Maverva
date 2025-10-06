import { WelcomeTexts } from "../../../constants/welcome-page-contents";
import {
  BrandInfo,
  Brandlogo,
  FooterContainer,
  IconLanguage,
  IconSelect,
  LinkItem,
  LinkWrapper,
  CopyRigtWrapper,
} from "./styles";
import logoBrand from "../../../assets/logo/logo32.ico";

function Footer() {
  return (
    <FooterContainer>
      <BrandInfo>
        <Brandlogo src={logoBrand} />
        Manage all your projects in one place
      </BrandInfo>
      <LinkWrapper>
        <CopyRigtWrapper>{WelcomeTexts.footer.copyright}</CopyRigtWrapper>
        <LinkItem>{WelcomeTexts.footer.privacyPolicy}</LinkItem>
        <LinkItem>{WelcomeTexts.footer.terms}</LinkItem>
        <LinkItem>
          <IconLanguage /> English
          <IconSelect />
        </LinkItem>
      </LinkWrapper>
    </FooterContainer>
  );
}
export default Footer;
