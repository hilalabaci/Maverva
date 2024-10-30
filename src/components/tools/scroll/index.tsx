import * as ScrollArea from "@radix-ui/react-scroll-area";
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
  scrollHeight: string;
};

const Scroll = ({ children, scrollHeight }: ScrollProps) => {
  return (
    <ScrollAreaRoot scrollHeight={scrollHeight}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      {/* <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar> */}
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};
export default Scroll;
