import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";
export const TooltipContent = styled(Tooltip.Content)`
  border-radius: 4px;
  padding: 5px;
  font-size: 13px;
  line-height: 1;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.fontColour};
  user-select: none;
`;

export const TooltipTrigger = styled(Tooltip.Trigger)`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
`;
