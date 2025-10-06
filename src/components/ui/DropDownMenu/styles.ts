import styled, { css } from "styled-components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { DropdownContentProps } from "./types";

export const DropdownMenuPrimitiveRoot = styled(DropdownMenuPrimitive.Root)``;

export const DropdownContent = styled(
  DropdownMenuPrimitive.Content
)<DropdownContentProps>`
  z-index: 1 !important;
  background-color: ${(props) => props.theme.colour.modal.background.default};
  color: ${(props) => props.theme.colour.text.inverted};
  border: ${(props) => props.theme.colour.primary.card.border.default};
  border-radius: 5px;
  padding: 8px 0;
  box-shadow: 0 8px 9pt #091e4226, 0 0 1px #091e424f;
  ${({ $triggerWidth }) =>
    $triggerWidth &&
    css`
      width: var(--radix-dropdown-menu-trigger-width);
    `}
`;

export const DropDownItem = styled(DropdownMenuPrimitive.Item)`
  padding: 10px 25px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 400;
  outline: none;
  &:hover {
    background-color: ${(props) => props.theme.colour.modal.background.hover};
  }
`;

export const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  &[data-highlighted] > & {
    color: white;
  }
  &[data-disabled] & {
  }
`;
export const DropdownMenuSub = styled(DropdownMenuPrimitive.Sub)``;
export const DropdownMenuPrimitiveSubTrigger = styled(
  DropdownMenuPrimitive.SubTrigger
)`
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 400;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 5px;
  position: relative;
  padding-left: 25px;
  user-select: none;
  outline: none;
  &[data-disabled] {
    pointer-events: none;
  }
  &[data-highlighted] {
  }
`;
export const DropdownMenuPrimitivePortal = styled(
  DropdownMenuPrimitive.Portal
)``;
export const DropdownMenuPrimitiveSubContent = styled(
  DropdownMenuPrimitive.SubContent
)`
  // box-shadow: var(
  //   --ds-shadow-overlay,
  //   0 4px 8px -2px rgba(9, 30, 66, 0.25),
  //   0 0 1px rgba(9, 30, 66, 0.31)
  // );
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &[data-side="top"] {
    animation-name: slideDownAndFade;
  }
  &[data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  &[data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  &[data-side="left"] {
    animation-name: slideRightAndFade;
  }
`;
