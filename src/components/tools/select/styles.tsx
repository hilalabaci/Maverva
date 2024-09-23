import styled, { css } from "styled-components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownContentProps, DropDownItemProps } from "./types";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

export const DropDownContainer = styled(DropdownMenuPrimitive.Root)`
  z-index: 1;
`;

export const DropdownContent = styled(
  DropdownMenuPrimitive.Content
)<DropdownContentProps>`
  background-color: white;
  border-radius: 5px;
  padding: 10px 0;

  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  z-index: 1;
  ${({ $triggerWidth }) =>
    $triggerWidth &&
    css`
      width: var(--radix-dropdown-menu-trigger-width);
    `};
`;
export const DropDownItemWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: center;
`;

export const DropDownItem = styled(
  DropdownMenuPrimitive.Item
)<DropDownItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 10px 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  border-radius: 5px;
  //background-color: ${(props) => (props.$isSelected ? "green" : "red")};
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const TitleforDropDownMenu = styled.h2`
  font-size: 15px;
  padding: 0 19px;
`;
export const IconForSelect = styled(CheckCircleRoundedIcon)`
  font-size: 15px !important;
  color: ${(props) => props.theme.themeActiveColor};
`;
