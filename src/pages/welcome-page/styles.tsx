import styled from "styled-components";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

export const Container = styled.div`
  height: 100vh;
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
  @media only screen and (max-width: 600px) {
    padding-top: 0;
  }
`;
export const StartTrialWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 75pc;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const TabSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  @media only screen and (max-width: 600px) {
    margin: 35px 0;
    margin-inline: 24px;
  }
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
  @media only screen and (max-width: 600px) {
    height: min-content;
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
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
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
  @media only screen and (max-width: 600px) {
    padding: 0;
    font-size: 24px;
  }
`;
export const TitleDetail = styled.p`
  font-size: 19px;
  color: #2f4156;
`;
export const InfoSection = styled.div`
  //background: linear-gradient(225deg, #deebff 0%, #ffffff 100%);
  background: #c8d9e6;
  height: 100vh;
  @media only screen and (max-width: 600px) {
    height: min-content;
  }
`;
type CommonPropsType = {
  $hidden?: boolean;
};
export const SectionEntery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-inline: 24px;
  @media only screen and (max-width: 768px) {
    
  
}

`;

export const GetStartWrapper = styled.div<CommonPropsType>`
  display: flex;
  flex-direction: column;
  //padding-bottom: ${({ $hidden }) => ($hidden ? "0" : " 5rem")};
  opacity: ${({ $hidden }) => ($hidden ? "0" : "1")};
  width: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  height: ${({ $hidden }) => ($hidden ? "0" : "auto")};
`;
export const GetStartGmailWrapper = styled.div<CommonPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //padding-bottom: ${({ $hidden }) => ($hidden ? "0" : " 5rem")};
  opacity: ${({ $hidden }) => ($hidden ? "0" : "1")};
  height: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  width: ${({ $hidden }) => ($hidden ? "0" : "auto")};
  transition: 750ms opacity;
  @media only screen and (max-width: 768px) {
  
  }
  
`;
export const Promotion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
export const Title = styled.h1`
  color: #fff;
  line-height: 3.5rem;
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 0;
  cursor: default;
  margin: 0;
  @media only screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 2rem;
  }
`;
export const TitleParag = styled.h3`
  color: #fff;
  margin-block-start: 24px;
  line-height: 1.33333333;
  letter-spacing: 0.3px;
  font-weight: 500;
  min-height: 80px;
  max-height: 100px;
  cursor: default;
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
  @media only screen and (max-width: 600px) {
    width: 200px;
  }
`;
export const Footer = styled.footer`
  background: #ffffff;
`;

export const LoginText = styled.p`
  font-size: 17px;
  color: #f5efeb;
  //padding: 20px 0;
  font-weight: 400;
  cursor: default;
`;
export const LoginLink = styled.a`
  color: #fca700;
  font-size: 17px;
  margin-left: 5px;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #ff8b00;
  }
`;
