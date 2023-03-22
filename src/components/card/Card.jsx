import React from "react";
import Label from "./compact-card-label/Label";
import "./card.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Card(props) {
  return (
    <div className="card-container">
      <div className="more-contaier">
        <button className="more-button">
          <MoreHorizIcon sx={{ color: "white" }} />
        </button>
      </div>
      <div className="note-container">{props.note}</div>
      <div className="card-label-container">
        <Label color="#8D4116" />
        <Label color="#14641C" />
      </div>
    </div>
  );
}
export default Card;
