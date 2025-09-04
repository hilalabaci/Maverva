import { PropsWithChildren } from "react";
import {
  MainContainer,
  InnerContainer,
  BoxContainer,
  SectionofBox,
} from "./styles";
import { BrandContainer, Presentation } from "../navbar/navbar-project/styles";
import DynamicSVGBrand from "../../ DynamicSVG/LogoSVG";
type BoxLayoutProps = PropsWithChildren<{}>;

function BoxLayout({ children }: BoxLayoutProps) {
  return (
    <MainContainer>
      <InnerContainer>
        <BoxContainer>
          <SectionofBox>
            <BrandContainer>
              <DynamicSVGBrand width="120" height="30" />
            </BrandContainer>
            <Presentation></Presentation>
          </SectionofBox>
        </BoxContainer>
      </InnerContainer>
    </MainContainer>
  );
}
