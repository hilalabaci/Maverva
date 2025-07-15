import React, { useRef } from "react";

const MyComponent: React.FC = () => {
  const myElementRef = useRef<HTMLDivElement | null>(null);

  const getRelativePosition = (
    element: HTMLElement
  ): { top: number; left: number; bottom: number; right: number } => {
    const rect = element.getBoundingClientRect(); // Ekrandaki pozisyonu alır
    const parentRect = element.offsetParent?.getBoundingClientRect() || {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };

    const top = rect.top - parentRect.top;
    const left = rect.left - parentRect.left;
    const bottom = parentRect.bottom - rect.bottom;
    const right = parentRect.right - rect.right;

    return { top, left, bottom, right };
  };

  const handleClick = () => {
    if (myElementRef.current) {
      const position = getRelativePosition(myElementRef.current);
    }
  };

  return (
    <div>
      <div
        ref={myElementRef}
        style={{
          position: "relative",
          width: "200px",
          height: "200px",
          backgroundColor: "lightblue",
        }}
        onClick={handleClick}
      >
        Click me to get relative position
      </div>
    </div>
  );
};

export default MyComponent;
