import React from "react";
import "./index.css";
function Button(props) {
  return <input className="button-input" type="button" value={props.value} />;
}
export default Button;
