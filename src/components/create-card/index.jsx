import Button from "../button";
import React from "react";
import "./style.css";
function CreateCard() {
  function onClick(event) {}
  return (
    <div className="create-card-wrapper">
      <div className="title">Create Board</div>
      <div className="inputs-wrapper">
        <label className="label-wrapper">Board title</label>
        <input className="text-wrapper" type="text" />
        <label className="label-wrapper">Description</label>
        <textarea className="text-wrapper" rows="3" type="text" />
        <Button value="Create" onClick={onClick} />
      </div>
    </div>
  );
}
export default CreateCard;
