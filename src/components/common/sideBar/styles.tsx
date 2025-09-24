import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const BorderforSideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  background-color: ${(props) => props.theme.colour.divider.background.default};
  pointer-events: none;
  width: 4px;
  height: 100%;
  &:hover {
    background-color: #0c66e4;
  }
`;
type CommonPropsType = {
  $hidden?: boolean;
  $isHovered?: boolean;
};

export const ArrowContainer = styled.div<CommonPropsType>`
  position: absolute;
  top: 40px;
  left: -8px;
  display: ${(props) => (props.$isHovered ? "block" : "none")};
`;
export const ArrowIcon = styled.button<CommonPropsType>`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  font-size: 20px !important;
  background-color: ${(props) => props.theme.primary};
  color: #44546f;
  box-shadow: rgba(9, 30, 66, 0.08) 0px 0px 0px 1px,
    rgba(9, 30, 66, 0.08) 0px 2px 4px 1px;
  cursor: pointer;
  outline: 0px;
  transition: background-color 100ms linear, color 100ms linear,
    opacity 350ms cubic-bezier(0.2, 0, 0, 1);

  //color: ${(props) => props.theme.fontColour};
  // margin: ${(props) => (props.$hidden ? "25px 0 0 0" : "0")};
  //background-color: ${(props) => props.theme.BorderMenu};
  &:hover {
    background-color: #0c66e4;
    color: white;
  }
 @media ${device.mobile} {
    margin: 0;
    font-size: 18px !important;
    padding-top: 5px;
  }
`;
