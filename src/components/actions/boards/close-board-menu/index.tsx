import {
  Container,
  Header,
  Title,
  Content,
  ButtonWrapper,
  DeleteButton,
  BoardTitle,
  WarningIcon,
} from "./styles";
import { CancelButton } from "../../addPerson/styles";

type CloseBoardMenuPropsType = {
  boardName: string;
  onClose: () => void;
  onDelete: () => void;
};

function CloseBoardMenu(props: CloseBoardMenuPropsType) {
  const boardName = props.boardName;
  return (
    <Container>
      <Header>
        <WarningIcon />
        <Title>Move to trash?</Title>
      </Header>
      <Content>
        Are you sure you want to delete the <BoardTitle>{boardName}</BoardTitle>{" "}
        card? This action will also delete all cards associated with it.
      </Content>
      <Content>
        Only Process admins can restore the project from the trash.
      </Content>
      <ButtonWrapper>
        <CancelButton onClick={props.onClose}>Cancel</CancelButton>
        <DeleteButton onClick={props.onDelete}>Delete</DeleteButton>
      </ButtonWrapper>
    </Container>
  );
}
export default CloseBoardMenu;
