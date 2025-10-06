import { PropsWithChildren } from "react";
import EmailLogo from "../../../assets/email/emailLogo2.png";
import {
  MainContainer,
  InnerContainer,
  BoxContainer,
  SectionofBox,
  BrandContainer,
} from "./styles";
type BoxLayoutProps = PropsWithChildren<{}>;

function BoxLayout({ children }: BoxLayoutProps) {
  return (
    <MainContainer>
      <InnerContainer>
        <BoxContainer>
          <SectionofBox>
            <BrandContainer>
              <img
                src={EmailLogo}
                alt="Logo"
                style={{ height: 60, marginRight: 10 }}
              />
            </BrandContainer>
            {children}
          </SectionofBox>
        </BoxContainer>
      </InnerContainer>
    </MainContainer>
  );
}
export default BoxLayout;
