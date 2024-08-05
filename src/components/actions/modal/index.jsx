import React from "react";
import { Backdrop, Container } from "./styles";
import useOutsideClick from "../../../hooks/useOutsideClick";

function Modal(props) {
  const ref = useOutsideClick(props.onClose);
  return (
    <Backdrop style={props.style}>
      <Container ref={ref}>{props.children}</Container>
    </Backdrop>
  );
}
export default Modal;
