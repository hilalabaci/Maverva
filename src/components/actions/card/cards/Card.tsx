import { useState } from "react";
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
import {
  CardType,
  DragDropCollect,
  DragItem,
  LabelType,
  UserType,
} from "../../../../types";

type CardProps = {
  id: string;
  onUpdate: (card: CardType) => void;
  labels: LabelType[];
  onDelete: (id: string) => void;
  content: string;
  userId?: UserType;
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

  return (
    <Container ref={drag}>
      <GlobalStyle />

      <CardTopWrapper>
        <LabelWrapper>
          {props.labels.map((label, index) => {
            return <Label key={index} colour={label.colour} />;
          })}
        </LabelWrapper>
        <Modal
          trigger={<EditIcon onClick={openModal} />}
          open={showModal}
          onChange={setShowModal}
          onClose={closeModal}
        >
          <EditCard
            labels={props.labels}
            onDelete={(id) => {
              props.onDelete(id);
              closeModal();
            }}
            onUpdate={(card) => {
              props.onUpdate(card);
              closeModal();
            }}
            id={props.id}
          />
        </Modal>
      </CardTopWrapper>
      <NoteWrapper>{props.content}</NoteWrapper>
      <CardButtomWrapper>
        <MemberPhoto
          $userPhotoWidth="25px"
          $userPhotoHeight="25px"
          $userPhotoFontSize="10px"
          $userBorderadius="50px"
          user={props.userId}
        />
      </CardButtomWrapper>
    </Container>
  );
}
export default Card;
