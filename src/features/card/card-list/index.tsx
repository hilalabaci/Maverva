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
import { IssueType, DragItem } from "../../../types";
import useOutsideClick from "../../../hooks/useOutsideClick";
import apiHelper from "../../../api/apiHelper";
interface CardListProps {
  title: string;
  cards: IssueType[];
  status: number;
  projectKey: string;
  boardId?: string;
  sprintId: string;
  onUpdate: (card: IssueType) => void;
  onUpdateContent: (card: IssueType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: IssueType) => void;
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
            id={card.Id}
            key={index}
            content={card.Summary}
            labels={card.Labels}
            userId={card.UserId}
            userName={card.UserId.FullName}
            cardKey={card.Key}
            status={card.Status}
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
