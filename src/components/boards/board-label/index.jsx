import React, { useState } from "react";
import Modal from "../../modal";
import { Label, Wrapper, EditIcon } from "./styles";
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
      {showModal && (
        <Modal onClose={closeModal}>
          <CloseBoardMenu
            onDelete={props.onDelete}
            onClose={closeModal}
            boardName={props.title}
          />
        </Modal>
      )}
      <Label>{props.title}</Label>
      <div>
        <EditIcon onClick={openModal} />
      </div>
    </Wrapper>
  );
}
export default BoardLabel;
