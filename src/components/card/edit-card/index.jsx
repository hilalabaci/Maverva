import React, { useState } from "react";
import Move from "./move";
import { Container, Title, Wrapper, ModalBox, ModalBoxStatus } from "./styles";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import EditLabel from "./edit-label";
function EditCard(props) {
  const [showLabel, setShowLabel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
    setShowLabel(false);
  }
  function openLabel() {
    setShowLabel(true);
    setShowModal(false);
  }
  function onClose() {
    setShowLabel(false);
  }
  async function deleteCard() {
    const cardId = props.id;
    const response = await fetch(process.env.REACT_APP_API_URL + "card?id=" + cardId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      props.onDelete(cardId);
    }
  }
  return (
    <Container>
      <ModalBox>
        <Wrapper onClick={openModal}>
          <TrendingFlatIcon />
          <Title>Move</Title>
        </Wrapper>
        <Wrapper onClick={openLabel}>
          <LabelImportantIcon />
          <Title>Add Label</Title>
        </Wrapper>
        <Wrapper onClick={deleteCard}>
          <RemoveCircleOutlineIcon />
          <Title>Delete</Title>
        </Wrapper>
      </ModalBox>
      <ModalBoxStatus>
        {showModal && <Move cardId={props.id} onUpdate={props.onUpdate} />}
        {showLabel && (
          <EditLabel
            labels={props.labels}
            cardId={props.id}
            onClose={onClose}
            onUpdate={props.onUpdate}
          />
        )}
      </ModalBoxStatus>
    </Container>
  );
}
export default EditCard;
