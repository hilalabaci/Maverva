import React from "react";
import "./index.css"
function Input(props) {
  return (
    <div className="input-container">
      <span className="text-container">{props.title}</span>
      <input className="inputs" type={props.type} placeholder={props.placeholder} />
    </div>
  );
}
export default Input;
