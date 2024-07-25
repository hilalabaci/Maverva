import React, { useState } from "react";
import Label from "../card-label/index";
import Modal from "../../modal";
import EditCard from "../edit-card/index";
import MemberPhoto from "../../../tools/user/member-photo";
import {
  Container,
  NoteWrapper,
  CardButtomWrapper,
  LabelWrapper,
  GlobalStyle,
  EditIcon,
  CardTopWrapper,
} from "./styles";
import { useDrag } from "react-dnd";

function Card(props) {
  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { id: props.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  return (
    <Container ref={drag}>
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
      <CardTopWrapper>
        <LabelWrapper>
          {props.labels.map((label, index) => {
            return <Label key={index} color={label.colour} />;
          })}
        </LabelWrapper>
        <EditIcon onClick={openModal} />
      </CardTopWrapper>
      <NoteWrapper>{props.title}</NoteWrapper>
      <CardButtomWrapper>
        <MemberPhoto
          $userPhotoWidth="25px"
          $userPhotoHeight="25px"
          $userPhotoFontSize="10px"
          $userBorderadius="50px"
        />
      </CardButtomWrapper>
    </Container>
  );
}
export default Card;
