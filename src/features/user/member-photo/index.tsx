import { useUserContext } from "../../../contexts/UserContext";
import { UserType } from "../../../types";
import { Container, MemberAvatar, Memberphoto } from "./styles";
interface MemberPhotoProps {
  user?: UserType;
  $hidden?: boolean;
  $userPhotoWidth?: string;
  $userPhotoHeight?: string;
  $userPhotoFontSize?: string;
  $userBorderadius?: string;
  $userBorder?: string;
  $fontWeight?: string;
  $marginLeft?: string;
  style?: { zIndex?: number };
}

function MemberPhoto(props: MemberPhotoProps) {
  const { user: contextUser } = useUserContext();
  const user = props.user ?? contextUser;
  const profilePhotoUrl =
    user?.ProfilePicture ||
    `https://api.dicebear.com/9.x/initials/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&scale=100&radius=50&randomizeIds=true&seed=${user?.FullName}`;

  return (
    <Container
      style={{ zIndex: props.style?.zIndex }}
      $hidden={props.$hidden}
      $marginLeft={props.$marginLeft}
    >
      <Memberphoto
        $userPhotoWidth={props.$userPhotoWidth}
        $userPhotoHeight={props.$userPhotoHeight}
        $userPhotoFontSize={props.$userPhotoFontSize}
        $userBorderadius={props.$userBorderadius}
        $userBorder={props.$userBorder}
        $fontWeight={props.$fontWeight}
      >
        <MemberAvatar
          alt="member photo"
          src={profilePhotoUrl}
          $userPhotoWidth={props.$userPhotoWidth}
          $userPhotoHeight={props.$userPhotoHeight}
          $userBorderadius={props.$userBorderadius}
        />
      </Memberphoto>
    </Container>
  );
}
export default MemberPhoto;
