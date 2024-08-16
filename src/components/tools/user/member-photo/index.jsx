import { useUserContext } from "../../../../contexts/UserContext";
import { Container, Memberphoto } from "./styles";

function MemberPhoto(props) {
  const { user: contextUser } = useUserContext();
  // const user = props.user ? props.user : contextUser;
  const user = props.user ?? contextUser;

  const chars = user.fullName.split(" ");
  const firstName = chars[0];
  const lastName = chars.length > 1 ? chars[1] : "";

  return (
    <Container $hidden={props.$hidden}>
      <Memberphoto
        $userPhotoWidth={props.$userPhotoWidth}
        $userPhotoHeight={props.$userPhotoHeight}
        $userPhotoFontSize={props.$userPhotoFontSize}
        $userBorderadius={props.$userBorderadius}
        $userBorder={props.$userBorder}
      >
        {firstName[0]}
        {lastName[0]}
      </Memberphoto>
    </Container>
  );
}
export default MemberPhoto;
