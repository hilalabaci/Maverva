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
  scrollheight?: string;
  scrollwidth?: string;
};

const Scroll = ({ children, scrollheight, scrollwidth }: ScrollProps) => {
  return (
    <ScrollAreaRoot scrollheight={scrollheight} scrollwidth={scrollwidth}>
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
