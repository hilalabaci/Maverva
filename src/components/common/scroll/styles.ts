import * as ScrollArea from "@radix-ui/react-scroll-area";
import styled from "styled-components";

type ScrollAreaRootType = {
  scrollheight?: string;
  scrollwidth?: string;
};

export const ScrollAreaRoot = styled(ScrollArea.Root)<ScrollAreaRootType>`
  height: ${(props) => props.scrollheight || "100%"};
  width: ${(props) => props.scrollwidth || "100%"};
  overflow: hidden;
  box-shadow: 0 2px 10px var(--black-a4);
  --scrollbar-size: 10px;
`;
export const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow-x: auto;
  overflow-y: auto;
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)<{
  orientation: "horizontal" | "vertical";
}>`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  transition: 160ms ease-out;
  width: 7px;
  background: ${(props) => props.theme.colour.background.primary};
  /* Adjust width or height based on orientation */
  ${({ orientation, theme }) =>
    orientation === "horizontal"
      ? `
        height: 9px;
        width: 99%;
        padding:4px;
        border-top:1px solid ${theme.colour.background.primary};
  
      `
      : `
        width: 9px;
        height: 99%;
        padding:4px;
        border-top:1px solid ${theme.colour.background.primary};
 
   
      `}
  &:hover {
    //background: #b2b2b2;
  }
`;
export const ScrollAreaThumb = styled(ScrollArea.Thumb)<{
  orientation: "horizontal" | "vertical";
}>`
  ${({ orientation, theme }) =>
    orientation === "horizontal"
      ? `
        background: #c2c1c2;
        border-radius: 10px;
        background:${theme.colour.background.primary};
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          min-width: 30px;
          min-height: 30px;
          }
      `
      : `
        flex: 1;
        background:${theme.colour.background.primary};
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
          min-width: 30px;
          min-height:30px;
          }
      `}
`;
export const ScrollAreaCorner = styled(ScrollArea.Corner)``;
