import {
  Container,
  Header,
  Title,
  Content,
  ButtonWrapper,
  DeleteButton,
  ProjectTitle,
  WarningIcon,
} from "./styles";
import { CancelButton } from "../../AddPerson/styles";

type CloseProjectMenuPropsType = {
  projectName: string;
  onClose: () => void;
  onDelete: () => void;
};

function CloseProjectMenu(props: CloseProjectMenuPropsType) {
  const projectName = props.projectName;
  return (
    <Container>
      <Header>
        <WarningIcon />
        <Title>Move to trash?</Title>
      </Header>
      <Content>
        Are you sure you want to delete the <ProjectTitle>{projectName}</ProjectTitle>{" "}
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
export default CloseProjectMenu;
