import { ReactNode } from "react";
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "./styles";

type ScrollProps = {
  children: ReactNode;
  scrollHeight?: string;
  scrollWidth?: string;
};

const Scroll = ({ children, scrollHeight, scrollWidth }: ScrollProps) => {
  return (
    <ScrollAreaRoot scrollHeight={scrollHeight} scrollWidth={scrollWidth}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb orientation="horizontal" />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb orientation="vertical" />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};
export default Scroll;
