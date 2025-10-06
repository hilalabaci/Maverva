import Typed from "typed.js";
import { useEffect, useRef } from "react";

type TypedDemoPropsType = {
  textforTyped: string[];
};

const TypedDemo = ({ textforTyped }: TypedDemoPropsType) => {

  const typedElement = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: textforTyped,
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });
    }
    return () => {
      typedInstance.current?.destroy();
    };
  }, [textforTyped]);

  return <span ref={typedElement}></span>;
};

export default TypedDemo;
