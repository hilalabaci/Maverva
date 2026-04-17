import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colour.background.default};
  color: ${(props) => props.theme.fontColour};
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;
export const MainContainer = styled.div`
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
 @media ${device.mobile} {
    margin-left: 7px;
  }
`;
export const Breadcrumbs = styled.div``;
