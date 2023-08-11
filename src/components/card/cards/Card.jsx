import React, { useState } from "react";
import Label from "../card-label";
import Modal from "../../modal";
import {
  Container,
  NoteWrapper,
  IconWrapper,
  LabelWrapper,
  GlobalStyle,
  MoreIcon,
} from "./styles";
import EditCard from "../edit-card";

function Card(props) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  return (
    <Container>
      <GlobalStyle />
      {showModal && (
        <Modal onClose={closeModal}>
          <EditCard
            labels={props.labels}
            onDelete={(id) => {
              props.onDelete(id);
              closeModal();
            }}
            onUpdate={(id, card) => {
              props.onUpdate(id, card);
              closeModal();
            }}
            id={props.id}
          />
        </Modal>
      )}
      <NoteWrapper>{props.title}</NoteWrapper>
      <IconWrapper>
        <LabelWrapper>
          {props.labels.map((label, index) => {
            return <Label key={index} color={label.colour} />;
          })}
        </LabelWrapper>
        <MoreIcon onClick={openModal} />
      </IconWrapper>
    </Container>
  );
}
export default Card;
