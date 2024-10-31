import { useDrag } from "react-dnd";
import {
  BacklogDragItems,
  CardStatus,
  DragDropCollect,
  DragItem,
  UserType,
} from "../../../types";
import { getStatusLabel } from "../../../utils/label";
import CheckboxRadixUi from "../checkboxRadixUI";
import SelectDemo from "../selectDemo";
import { ToolTip } from "../toolstip";
import MemberPhoto from "../user/member-photo";
import {
  BacklogCardListItems,
  CheckboxWrapper,
  CardKey,
  ContentWrapper,
  Content,
  ContentText,
  IconEdit,
  Status,
  MemberWrapper,
  MoreIcon,
} from "./styles";

type BacklogCardPropsType = {
  cardKey: string;
  content: string;
  status: number;
  user: UserType;
  id: string;
  sprintId?: string;
  boardId: string;
};

function BacklogCard({
  cardKey,
  content,
  status,
  user,
  id,
  sprintId,
  boardId,
}: BacklogCardPropsType) {
  const [{ isDragging }, drag] = useDrag<
    BacklogDragItems,
    unknown,
    DragDropCollect
  >({
    type: "BACKLOG_CARD",
    item: { cardId: id, oldSprintId: sprintId, boardId: boardId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const statusOptions = [
    { label: getStatusLabel(CardStatus.Backlog), value: CardStatus.Backlog },
    { label: getStatusLabel(CardStatus.ToDo), value: CardStatus.ToDo },
    {
      label: getStatusLabel(CardStatus.InProgress),
      value: CardStatus.InProgress,
    },
    { label: getStatusLabel(CardStatus.Done), value: CardStatus.Done },
  ];

  const handleStatusChange = (status: string) => {
    console.log("Selected status:", status);
  };
  return (
    <BacklogCardListItems role="button" ref={drag}>
      <CheckboxWrapper>
        <CheckboxRadixUi />
      </CheckboxWrapper>
      <CardKey>{cardKey}</CardKey>
      <ContentWrapper>
        <ToolTip
          contentStyle={{ zIndex: 0 }}
          trigger={
            <Content>
              <ContentText>{content}</ContentText>
              <IconEdit />
            </Content>
          }
          content={content}
        ></ToolTip>
      </ContentWrapper>
      <Status status={status}>
        <SelectDemo
          items={statusOptions}
          onSelect={handleStatusChange}
          selectedValue={status}
        />
      </Status>

      <MemberWrapper>
        <ToolTip
          trigger={
            <MemberPhoto
              user={user}
              $userPhotoWidth="25px"
              $userPhotoHeight="25px"
              $userPhotoFontSize="7px"
              $userBorderadius="50px"
            />
          }
          content={user.fullName}
        ></ToolTip>
      </MemberWrapper>
      <MoreIcon />
    </BacklogCardListItems>
  );
}
export default BacklogCard;
