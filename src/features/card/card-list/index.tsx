import { useState } from "react";
import Card from "../cards/Card";
import AddCard from "../add-a-card/AddCard";
import { useDrop } from "react-dnd";
import {
  CardWrapper,
  Container,
  AddCardButtonWrapper,
  AddCardButton,
  IconAdd,
} from "./styles";
import { CardType, DragItem } from "../../../types";
import useOutsideClick from "../../../hooks/useOutsideClick";
import apiHelper from "../../../api/apiHelper";
interface CardListProps {
  title: string;
  cards: CardType[];
  status: number;
  projectKey: string;
  boardId?: string;
  sprintId: string;
  onUpdate: (card: CardType) => void;
  onUpdateContent: (card: CardType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: CardType) => void;
}

function CardList(props: CardListProps) {
  const [showAdd, setShowAdd] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(closeAddCard);
  function dynamicAddCard() {
    setShowAdd(true);
  }
  function closeAddCard() {
    setShowAdd(false);
  }

  async function updateStatus(id: string, status: number) {
    const response = await apiHelper.updateCard(id, status);
    if (response.ok && response.data) {
      props.onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  const [, drop] = useDrop<DragItem>({
    accept: "CARD",
    drop: (item) => {
      updateStatus(item.id, props.status);
    },
  });

  return (
    <Container ref={drop}>
      <CardWrapper>
        {props.cards?.map((card, index) => (
          <Card
            onUpdate={props.onUpdate}
            onUpdateContent={props.onUpdateContent}
            onDelete={props.onDelete}
            id={card._id}
            key={index}
            content={card.content}
            labels={card.labels}
            userId={card.userId}
            userName={card.userId.fullName}
            cardKey={card.cardKey}
            status={card.status}
          />
        ))}
      </CardWrapper>
      <AddCardButtonWrapper ref={ref}>
        {showAdd ? (
          <AddCard
            addedCard={props.addedCard}
            projectKey={props.projectKey}
            onClose={closeAddCard}
            status={props.status}
            boardId={props.boardId}
            sprintId={props.sprintId}
          />
        ) : (
          <AddCardButton onClick={dynamicAddCard} type="submit">
            <IconAdd /> Create issue
          </AddCardButton>
        )}
      </AddCardButtonWrapper>
    </Container>
  );
}
export default CardList;
