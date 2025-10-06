import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const MainContainer = styled.div`
  background: linear-gradient(135deg, #567c8d, #2f4156);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobile} {
  }
`;
export const InnerContainer = styled.div`
  min-height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  margin: 50px 0px;
  @media ${device.mobile} {
    margin: 0;
    height: 100%;
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 400px;
  padding: 32px 40px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-shadow: 0 24px 64px #26214a1a;
  @media ${device.mobile} {
    flex: 1;
    width: fit-content;
    justify-content: center;
    padding: 20px 40px;
  }
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 39px;
  /* identical to box height */
  @media ${device.mobile} {
    font-size: 20px;
  }
`;
export const SectionofBox = styled.section`
  @media ${device.mobile} {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }
`;
