import React from "react";
import "./index.css";
function Button(props) {
  return (
    <button onClick={props.onClick} className="button-input">
      {props.value}
    </button>
  );
}
export default Button;
