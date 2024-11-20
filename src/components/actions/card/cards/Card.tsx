import { useState } from "react";
import Label from "../card-label/index";
import Modal from "../../../tools/modal";
import EditCard from "../edit-card/index";
import MemberPhoto from "../../../tools/user/member-photo";
import {
  Container,
  NoteWrapper,
  CardButtomWrapper,
  LabelWrapper,
  GlobalStyle,
  EditIcon,
  ContentWrapper,
  ButtomWrapper,
  CardKeyWrapper,
} from "./styles";
import { useDrag } from "react-dnd";
import {
  CardType,
  DragDropCollect,
  DragItem,
  LabelType,
  UserType,
} from "../../../../types";
import { ToolTip } from "../../../tools/toolstip";
import { DropdownMenu } from "../../../tools/dropdownMenu";
import apiHelper from "../../../../api/apiHelper";

type CardProps = {
  id: string;
  labels: LabelType[];
  content: string;
  userId?: UserType;
  userName: string;
  cardKey: string;
  status: number;
  onUpdate: (card: CardType) => void;
  onDelete: (id: string) => void;
};
function Card({
  id,
  labels,
  content,
  userId,
  userName,
  cardKey,
  status,
  onUpdate,
  onDelete,
}: CardProps) {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, DragDropCollect>({
    type: "CARD",
    item: { id: id },
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
  const [showLabel, setShowLabel] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  function openModalEdit() {
    setShowModalEdit(true);
    setShowLabel(false);
  }
  function openLabel() {
    setShowLabel(true);
    setShowModalEdit(false);
  }
  function onCloseEdit() {
    setShowLabel(false);
  }
  async function deleteCard() {
    const cardId = id;
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
      onDelete(cardId);
    }
  }

  async function updateStatus(id: string, status: number) {
    const response = await apiHelper.updateCard(id, status);
    if (response.ok && response.data) {
      onUpdate(response.data);
    } else {
      console.error("Failed to update card:", response);
    }
  }

  return (
    <Container ref={drag}>
      <GlobalStyle />
      <ContentWrapper>
        <ToolTip
          contentStyle={{ zIndex: 0 }}
          trigger={<NoteWrapper>{content}</NoteWrapper>}
          content={content}
        ></ToolTip>
        <DropdownMenu
          trigger={<EditIcon onClick={openModal} />}
          items={[
            {
              action: () => {},
              label: "Move to",
              subItems: [
                {
                  action: () => {
                    updateStatus(id, 1);
                  },
                  label: "To Do",
                },
                {
                  action: () => {
                    updateStatus(id, 2);
                  },
                  label: "In progress",
                },
                {
                  action: () => {
                    updateStatus(id, 3);
                  },
                  label: "Done",
                },
              ],
            },
            {
              action: () => {},
              label: "Add Label",
            },
            {
              action: () => {
                deleteCard();
              },
              label: "Delete",
            },
          ]}
        />
      </ContentWrapper>
      <LabelWrapper>
        {labels.map((label, index) => {
          return <Label key={index} colour={label.colour} />;
        })}
      </LabelWrapper>
      <CardButtomWrapper>
        <CardKeyWrapper>{cardKey}</CardKeyWrapper>
        <ToolTip
          contentStyle={{ zIndex: 0 }}
          trigger={
            <ButtomWrapper>
              <MemberPhoto
                $userPhotoWidth="24px"
                $userPhotoHeight="24px"
                $userPhotoFontSize="10px"
                $userBorderadius="50px"
                user={userId}
              />
            </ButtomWrapper>
          }
          content={`Assignee: ${userName}`}
        ></ToolTip>
      </CardButtomWrapper>
    </Container>
  );
}
export default Card;
