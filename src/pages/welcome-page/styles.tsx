import styled from "styled-components";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const Container = styled.div`
  height: 100vh;
`;

export const NavbarContainer = styled.header`
  position: fixed;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffff;
`;
export const BrandWrapper = styled.div``;

export const BrandContainer = styled.a`
  color: ${(props) => props.theme.memberMenuFontColor};
  display: flex;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 39px;
  gap: 5px;
  padding-inline-start: 150px;
  cursor: pointer;
  /* identical to box height */
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const BrandLogo = styled(DashboardRoundedIcon)`
  font-size: 26px !important;
  margin: 0px 5px;
  //color: ${(props) => props.theme.memberMenuFontColor} !important;
  color: #9b59b6;
  @media only screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
    margin: 0px 10px;
  }
`;
export const NavbarSignWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const ButtonForLogintonNavbar = styled.button`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 500;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  outline: 1.5px solid #fca700;
  border-radius: 5px;
  transition: 750ms outline;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  &:hover {
    outline: 2px solid #ff8b00;
    transition: 150ms outline;
  }
`;
export const ButtonForGetStartonNavbar = styled.button`
  border: none;
  outline: none;
  color: ${(props) => props.theme.primary};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #2f4156;
  background: #fca700;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  cursor: pointer;
  &:hover {
    background: #ff8b00;
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const MainContainer = styled.main`
  background-color: #f5efeb;
`;
export const SectionWrapper = styled.article`
  box-sizing: border-box;
`;
export const StartTrial = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: auto 100%, auto;
  background-position: 100% 0, 0 0;
  height: 100vh;
  background-repeat: no-repeat;
  padding-top: 3.75rem;
  gap: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #567c8d;
  // background-image: linear-gradient(275deg, #b08ace -7.63%, #9b59b6 105.13%);
  /* @media only screen and (min-width: 1024px) {
    background-image: url(https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pqscp5k83xxt7pq7f67jftr/JSM_BG_Graphics.webp),
      linear-gradient(
        287.15deg,
        #fafbfc,
        #deebff 8.06%,
        #b3d4ff 35.45%,
        #deebff 77.6%,
        #fafbfc
      );
  } */
`;
export const StartTrialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 75pc;
`;
export const TabSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const TabWrapper = styled.div`
  //background: white !important;
  background-color: #f5efeb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (min-width: 64rem) {
    width: 954pt;
  }
`;
export const TabTitleWrapper = styled.div`
  text-align: center;
`;
export const TabContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
  gap: 30px;
  align-items: stretch;
  justify-content: start;
  box-sizing: border-box;
  line-height: 1.5;
`;
export const TabContent = styled.div`
  background: linear-gradient(352deg, #c8d9e6 6.96%, #567c8d 107.25%);
  background: linear-gradient(352deg, #5037e7 6.96%, #eb00ff 107.25%);
  background: linear-gradient(352deg, #6731ec 1.65%, #44cfff 118.4%);
  background: linear-gradient(168deg, #d613ee -55.05%, #ff674e 64.52%);
  border-radius: 12px;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;
export const TabContentTitle = styled.h4`
  color: #fff;
  font-size: 20px;
  font-weight: 800;
`;
export const TabParag = styled.p`
  color: #fff;
  text-align: start;
  font-size: 16px;
  font-weight: 500;
`;

export const TabTitle = styled.h2`
  font-size: 2.5625rem;
  line-height: 1.243902439;
  color: #2f4156;
  font-weight: 900;
`;
export const TitleDetail = styled.p`
  font-size: 19px;
  color: #2f4156;
`;
export const InfoSection = styled.div`
  //background: linear-gradient(225deg, #deebff 0%, #ffffff 100%);
  background: #c8d9e6;
  height: 100vh;
`;
type CommonPropsType = {
  $hidden?: boolean;
};
export const SectionEntery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GetStartWrapper = styled.div<CommonPropsType>`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ $hidden }) => ($hidden ? "0" : " 5rem")};
  opacity: ${({ $hidden }) => ($hidden ? "0" : "1")};
  width: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  height: ${({ $hidden }) => ($hidden ? "0" : "auto")};
`;
export const GetStartGmailWrapper = styled.div<CommonPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: ${({ $hidden }) => ($hidden ? "0" : " 5rem")};
  opacity: ${({ $hidden }) => ($hidden ? "0" : "1")};
  height: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  width: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  transition: 750ms opacity;
`;
export const Promotion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: #fff;
  line-height: 3.5rem;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 0;
`;
export const TitleParag = styled.h3`
  color: #fff;
  margin-block-start: 24px;
  line-height: 1.33333333;
  letter-spacing: 0.3px;
  font-weight: 500;
  min-height: 80px;
  max-height: 100px;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
//  background: linear-gradient(135deg, #71b7e6, #9b59b6);

export const ButtonForGetStart = styled.button`
  max-width: fit-content;
  border: none;
  outline: none;
  //color: ${(props) => props.theme.primary};
  color: #2f4156;
  font-weight: 500;
  padding: 12px 50px;
  border-radius: 5px;
  font-size: 17px;
  //background: linear-gradient(135deg, #71b7e6, #9b59b6);
  background-color: #f5efeb;
  margin-top: 10px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  &:hover {
    // background: linear-gradient(-135deg, #567c8d, #2f4156);
    color: #f5efeb;
    background-color: #2f4156;
    transition: 500ms background-color;
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 47px;
  }
`;
export const ImgForWelcome = styled.img`
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
`;
export const Footer = styled.footer`
  background: #ffffff;
`;
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 150px;
  padding-block: 50px;
`;
export const BrandInfo = styled.div`
  font-weight: 850;
  color: #2f4156;
  font-size: 14px;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
`;
export const Brandlogo = styled.img`
  width: 18px;
  height: 18px;
`;
export const LinkWrapper = styled.div`
  font-size: 14px;
  color: rgba(81, 75, 129);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const LinkItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  cursor: pointer;
`;

export const IconLanguage = styled(LanguageOutlinedIcon)`
  width: 20px !important;
  height: 20px !important;
`;
export const IconSelect = styled(KeyboardArrowDownOutlinedIcon)`
  width: 20px !important;
  height: 20px !important;
`;
