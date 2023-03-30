import React from "react";
import "./index.css";
function Input(props) {
  return (
    <div className="input-container">
      <span className="text-container">{props.title}</span>
      <input
        className="inputs"
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        style={
          props.error !== undefined ? { border: "2px solid red" } : undefined
        }
      />
      <p className="warning-message">{props.error}</p>
    </div>
  );
}
export default Input;
