import { PropsWithChildren } from "react";
import {
  BoxContainer,
  BrandContainer,
  BrandDot,
  BrandMark,
  BrandName,
  InnerContainer,
  MainContainer,
  SectionofBox,
} from "./styles";

type BoxLayoutProps = PropsWithChildren<{}>;

function BoxLayout({ children }: BoxLayoutProps) {
  return (
    <MainContainer>
      <InnerContainer>
        <BoxContainer>
          <SectionofBox>
            <BrandContainer>
              <BrandMark>
                <BrandDot />
              </BrandMark>
              <BrandName>Maverva</BrandName>
            </BrandContainer>
            {children}
          </SectionofBox>
        </BoxContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default BoxLayout;
