import { PropsWithChildren } from "react";
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
                src="/email/emailLogo2.png"
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
