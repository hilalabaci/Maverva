// typedExample.tsx
import Typed from "typed.js";
import { useEffect, useRef } from "react";

type TypedDemoPropsType = {
  textforTyped: string[];
};

const TypedDemo = (props: TypedDemoPropsType) => {
  // Typed.js instance'ını saklamak için bir ref kullanıyoruz
  const typedElement = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: props.textforTyped,
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
      });
    }

    // Component unmount olduğunda Typed.js'i yok et
    return () => {
      typedInstance.current?.destroy();
    };
  }, []);

  return <span ref={typedElement}></span>;
};

export default TypedDemo;
