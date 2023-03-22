import React, { useState } from "react";
import "./addCard.css";
import CloseIcon from "@mui/icons-material/Close";
function AddCard(props) {
  const [note, setNote] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote("");
    event.preventDefault();
  }

  return (
    <div className="add-card-container">
      <textarea
        name="addCardArea"
        value={note}
        onChange={handleChange}
        className="add-card-textarea"
        id="w3review"
        placeholder="Enter a title for this card..."
        rows="4"
        cols="50"
      ></textarea>
      <div className="add-card-buttons ">
        <button onClick={submitNote} className="button add-card">
          Add card
        </button>
        <button className="button close">
          <CloseIcon />
        </button>
      </div>
    </div>
  );
}
export default AddCard;
