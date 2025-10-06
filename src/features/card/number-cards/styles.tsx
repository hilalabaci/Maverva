import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSize.subtitle};
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  @media ${device.mobile} {
    font-size: 15px;
  }
`;
