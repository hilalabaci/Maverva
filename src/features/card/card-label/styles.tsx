import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const LabelContainer = styled.div`
  width: 40px;
  height: 8px;
  border-radius: 2px;
 @media ${device.mobile} {
    width: 30px;
    height: 5px;
  }
`;
