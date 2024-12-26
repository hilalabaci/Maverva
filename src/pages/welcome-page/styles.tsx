import styled from "styled-components";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

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
  padding: 10px 20px;
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
  /* identical to box height */
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const BrandLogo = styled(DashboardRoundedIcon)`
  font-size: 26px !important;
  margin: 0px 5px;
  color: ${(props) => props.theme.memberMenuFontColor} !important;
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
  outline: none;
  background-color: transparent;
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 500;
  font-size: 16px;
  padding: 10px 20px;
`;
export const ButtonForGetStartonNavbar = styled.button`
  border: none;
  outline: none;
  color: ${(props) => props.theme.primary};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  &:hover {
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const MainContainer = styled.main``;
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
  @media only screen and (min-width: 1024px) {
    background-image: url(https://wac-cdn-bfldr.atlassian.com/K3MHR9G8/at/pqscp5k83xxt7pq7f67jftr/JSM_BG_Graphics.webp),
      linear-gradient(
        287.15deg,
        #fafbfc,
        #deebff 8.06%,
        #b3d4ff 35.45%,
        #deebff 77.6%,
        #fafbfc
      );
  }
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
  background: white !important;
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
export const TabContentWrapper = styled.div``;
export const TabTitle = styled.h2`
  font-size: 2.25rem;
  color: #253858;
  font-weight: 500;
`;
export const InfoSection = styled.div`
  background: linear-gradient(225deg, #deebff 0%, #ffffff 100%);
  height: 100vh;
`;
export const GetStartWrapper = styled.div`
  padding-bottom: 5rem;
`;
export const Promotion = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h1`
  color: #253858;
  line-height: 3.5rem;
  font-size: 3rem;
  font-weight: 500;
`;
export const TitleParag = styled.h3`
  color: #253858;
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
  border: none;
  outline: none;
  color: ${(props) => props.theme.primary};
  font-weight: 500;
  padding: 12px 50px;
  border-radius: 5px;
  font-size: 17px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  margin-top: 10px;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  &:hover {
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 47px;
  }
`;
export const ImgForWelcome = styled.img`
  max-width: 40%;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
`;
export const FooterContainer = styled.footer``;
