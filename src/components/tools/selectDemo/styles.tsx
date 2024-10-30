import * as Select from "@radix-ui/react-select";
import styled from "styled-components";
export const SelectTrigger = styled(Select.Trigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
  //color: ${(props) => props.theme.fontColourDark};
  //background-color: ${(props) => props.theme.IconEditBg};
  text-transform: uppercase;
  border-radius: 3px;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    background-color: var(--mauve-3);
  }
  &:focus {
  }
  &[data-placeholder] {
    color: var(--violet-9);
  }
`;
export const SelectIcon = styled(Select.Icon)`
  color: Var(--violet-11);
`;

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;
export const ItemContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Item = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: var(--violet-11);
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
  &[data-disabled] {
    color: var(--mauve-8);
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: var(--violet-9);
    color: var(--violet-1);
  }
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
`;

// .Viewport {
// 	padding: 5px;
// }

// .Label {
// 	padding: 0 25px;
// 	font-size: 12px;
// 	line-height: 25px;
// 	color: var(--mauve-11);
// }

// .Separator {
// 	height: 1px;
// 	background-color: var(--violet-6);
// 	margin: 5px;
// }

// .ItemIndicator {
// 	position: absolute;
// 	left: 0;
// 	width: 25px;
// 	display: inline-flex;
// 	align-items: center;
// 	justify-content: center;
// }

// .ScrollButton {
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	height: 25px;
// 	background-color: white;
// 	color: var(--violet-11);
// 	cursor: default;
// }
