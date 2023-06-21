import React, { useState } from "react";
import Modal from "../../modal";
import DeleteIcon from "@mui/icons-material/Delete";
import { GlobalStyle, Label, Wrapper } from "./styles";
import CloseBoardMenu from "../close-board-menu";

function BoardLabel(props) {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <Wrapper onClick={props.onClick}>
      <GlobalStyle />
      {showModal && (
        <Modal onClose={closeModal}>
          <CloseBoardMenu onDelete={props.onDelete} onClose={closeModal} boardName={props.title} />
        </Modal>
      )}
      <Label>{props.title}</Label>
      <div>
        <DeleteIcon onClick={openModal} className="editicon" />
      </div>
    </Wrapper>
  );
}
export default BoardLabel;
