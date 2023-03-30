import React from "react";
import "./index.css";
function Button(props) {
  return (
    <button className="button-input">
      {props.value}
    </button>
  );
}
export default Button;
