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

type CardProps = {
  id: string;
  onUpdate: (card: CardType) => void;
  labels: LabelType[];
  onDelete: (id: string) => void;
  content: string;
  userId?: UserType;
  userName: string;
};
function Card(props: CardProps) {
  const [{ isDragging }, drag] = useDrag<DragItem, unknown, DragDropCollect>({
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
    <Container ref={drag}>
      <GlobalStyle />
      <ContentWrapper>
        <ToolTip
          contentStyle={{ zIndex: 0 }}
          trigger={<NoteWrapper>{props.content}</NoteWrapper>}
          content={props.content}
        ></ToolTip>
        <DropdownMenu
          trigger={<EditIcon onClick={openModal} />}
          items={[
            {
              action: () => {},
              label: "Move to",
              subItems: [
                { action: () => {}, label: "To Do" },
                { action: () => {}, label: "In progress" },
                { action: () => {}, label: "Done" },
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
        {props.labels.map((label, index) => {
          return <Label key={index} colour={label.colour} />;
        })}
      </LabelWrapper>
      <CardButtomWrapper>
        <ToolTip
          contentStyle={{ zIndex: 0 }}
          trigger={
            <ButtomWrapper>
              <MemberPhoto
                $userPhotoWidth="24px"
                $userPhotoHeight="24px"
                $userPhotoFontSize="10px"
                $userBorderadius="50px"
                user={props.userId}
              />
            </ButtomWrapper>
          }
          content={`Assignee: ${props.userName}`}
        ></ToolTip>
      </CardButtomWrapper>
      <ContentWrapper></ContentWrapper>
    </Container>
  );
}
export default Card;
