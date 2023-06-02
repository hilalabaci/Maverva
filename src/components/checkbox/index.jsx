import React, { useState } from "react";
import "../checkbox/index.css";

function Checkbox(props) {
  return (
    <label className="container">
      <input
        type="checkbox"
        onClick={props.onChange}
        value={props.check}
        checked={props.check ? "checked" : undefined}
      />
      <span className="checkmark"></span>
    </label>
  );
}
export default Checkbox;
