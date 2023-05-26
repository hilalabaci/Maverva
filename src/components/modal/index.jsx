import React from "react";
import { Backdrop, Container } from "./styles";

const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};

function Modal(props) {
  const ref = useOutsideClick(props.onClose);
  return (
    <Backdrop>
      <Container ref={ref}>{props.children}</Container>
    </Backdrop>
  );
}
export default Modal;
