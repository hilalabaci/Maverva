import React from "react";
import "./label.css";
function Label(props) {
  return (
    <div
      className="label-container"
      style={{ backgroundColor: props.color }}
    ></div>
  );
}
export default Label;
