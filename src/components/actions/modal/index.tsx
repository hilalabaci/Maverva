import React, { PropsWithChildren } from "react";
import { Backdrop, Container } from "./styles";
import useOutsideClick from "../../../hooks/useOutsideClick";

type ModalPropsType = PropsWithChildren<{
  onClose: () => void;
  excludedRef?: React.MutableRefObject<HTMLButtonElement | null>;
  style?: React.CSSProperties;
}>;
function Modal(props: ModalPropsType) {
  const ref = useOutsideClick<HTMLDivElement>(props.onClose, props.excludedRef);
  return (
    <Backdrop style={props.style}>
      <Container ref={ref}>{props.children}</Container>
    </Backdrop>
  );
}
export default Modal;
