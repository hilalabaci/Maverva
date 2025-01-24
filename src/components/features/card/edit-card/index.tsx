import { useState } from "react";
import Move from "./move";
import {
  Container,
  Title,
  Wrapper,
  ModalBox,
  ModalBoxStatus,
  IconMove,
  IconLabel,
  IconDelete,
} from "./styles";
import EditLabel from "./edit-label";
import { CardType, LabelType } from "../../../../types";
import { DropdownMenu } from "../../../common/dropdownMenu";

type EditCardProps = {
  onUpdate: (card: CardType) => void;
  id: string;
  onDelete: (cardId: string) => void;
  labels: LabelType[];
};
function EditCard(props: EditCardProps) {
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
    const response = await fetch(
      process.env.REACT_APP_API_URL + "card?id=" + cardId,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      props.onDelete(cardId);
    }
  }
  return (
    <Container>
      <ModalBox>
        <DropdownMenu
          trigger={
            <Wrapper onClick={openModal}>
              <IconMove />
              <Title>Move to</Title>
            </Wrapper>
          }
        ></DropdownMenu>

        <Wrapper onClick={openLabel}>
          <IconLabel />
          <Title>Add Label</Title>
        </Wrapper>
        <Wrapper onClick={deleteCard}>
          <IconDelete />
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
