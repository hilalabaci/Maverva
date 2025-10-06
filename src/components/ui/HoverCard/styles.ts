import * as HoverCard from "@radix-ui/react-hover-card";
import styled from "styled-components";

export const HoverCardRoot = styled(HoverCard.Root)``;
export const HoverCardTrigger = styled(HoverCard.Trigger)`
  color: red;
`;
export const HoverCardPortal = styled(HoverCard.Portal)``;
export const HoverCardContent = styled(HoverCard.Content)`
  background-color: red;
  border-radius: 6px;
  padding: 20px;
  width: 300px;
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
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
export const HoverCardArrow = styled(HoverCard.Arrow)`
  fill: white;
`;
export const HoverCardImg = styled.img`
  display: block;
  border-radius: 100%;
  &:global(.normal) {
    width: 45px;
    height: 45px;
  }
  &:global(.large) {
    width: 60px;
    height: 60px;
  }
`;
