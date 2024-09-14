import MemberPhoto from "../../../tools/user/member-photo";
import {
  Container,
  Wrapper,
  AddProjectWrapper,
  ListWrapper,
  UserInfo,
  MemberName,
} from "./styles";
type ProjectMenuPropsType = {
  ProjectTitle: string;
  hideMenu: boolean;
};

function ProjectMenu(props: ProjectMenuPropsType) {
  return (
    <Container $hidden={props.hideMenu}>
      <Wrapper>
        <UserInfo $hidden={props.hideMenu}>
          <MemberPhoto
            $userPhotoWidth="40px"
            $userPhotoHeight="40px"
            $userPhotoFontSize="15px"
            $userBorderadius="5px"
            $hidden={props.hideMenu}
          />
          <MemberName $hidden={props.hideMenu}>{props.ProjectTitle}</MemberName>
        </UserInfo>
        <AddProjectWrapper $hidden={props.hideMenu}>
          <div>Planing</div>
        </AddProjectWrapper>
        <ListWrapper $hidden={props.hideMenu}>TES</ListWrapper>
      </Wrapper>
    </Container>
  );
}
export default ProjectMenu;
