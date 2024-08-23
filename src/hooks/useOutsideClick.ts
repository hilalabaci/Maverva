import React from "react";

const useOutsideClick = <
  T extends HTMLElement,
  K extends HTMLElement = HTMLElement
>(
  callback: () => void,
  excludedRef?: React.MutableRefObject<K | null>
) => {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        !ref.current.contains(event.target as Node) &&
        (!excludedRef?.current ||
          !excludedRef.current.contains(event.target as Node))
      ) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback, excludedRef]);

  return ref;
};

export default useOutsideClick;
