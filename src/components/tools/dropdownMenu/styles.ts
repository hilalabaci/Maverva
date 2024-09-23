import styled, { css } from "styled-components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownContentProps } from "./types";

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
  ${({ $triggerWidth }) =>
    $triggerWidth &&
    css`
      width: var(--radix-dropdown-menu-trigger-width);
    `}
`;

export const DropDownItem = styled(DropdownMenuPrimitive.Item)`
  padding: 15px 19px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  &:hover {
    background-color: #f0f0f0;
  }
`;
