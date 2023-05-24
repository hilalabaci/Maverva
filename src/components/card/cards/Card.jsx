import React, { useState } from "react";
import "./card.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Label from "../card-label"

function Card(props) {
  const [note, setNote] = useState();
  function handleChange(event) {
    const { value } = event.target;
    setNote(value);
  }
  const handleSubmit = async () => {
    const data = { userId: "", note: note };
    const response = await fetch("http://127.0.0.1:3001/notes", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonResponse = await response.json();
    if (response.status === 400) {
      console.log("Please check your details");
      return;
    }
    console.log(jsonResponse);
  };

  return (
    <div className="card-container">
      <div className="more-contaier">
        <button className="more-button">
          <MoreHorizIcon sx={{ color: "white" }} />
        </button>
      </div>
      <textarea
        onChange={handleChange}
        value={note}
        className="note-container"
        onClick={props.onClick}
      >
        {props.note}
      </textarea>
      <div className="card-label-container">
        <Label color="#8D4116" />
        <Label color="#14641C" />
      </div>
      <button onClick={handleSubmit} className="Add-card-button-card">
        Add card
      </button>
    </div>
  );
}
export default Card;
