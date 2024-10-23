import * as ScrollArea from "@radix-ui/react-scroll-area";
import styled from "styled-components";

export const ScrollAreaRoot = styled(ScrollArea.Root)`
  height: 180px;
  overflow: hidden;
  box-shadow: 0 2px 10px var(--black-a4);
  --scrollbar-size: 20px;
`;
export const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 2px;
  width: 5px;
  background: #d9d9d9;
  transition: 160ms ease-out;
  &:hover {
    background: #b2b2b2;
  }
`;
export const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: #7c7a85;
  border-radius: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;
export const ScrollAreaCorner = styled(ScrollArea.Corner)`
  background: green;
`;
