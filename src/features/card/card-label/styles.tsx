import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const LabelContainer = styled.div`
  width: 28px;
  height: 8px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  opacity: 0.9;
 @media ${device.mobile} {
    width: 22px;
    height: 6px;
  }
`;
