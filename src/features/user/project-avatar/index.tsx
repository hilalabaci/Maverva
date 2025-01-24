import { Container, MemberAvatar, Memberphoto } from "./styles";
interface ProjectAvatarProps {
  projectId?: string;
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

function ProjectAvatar(props: ProjectAvatarProps) {
  const projectId = props.projectId;
  return (
    <Container
      style={{ zIndex: props.style?.zIndex }}
      $hidden={props.$hidden}
      $marginLeft={props.$marginLeft}
    >
      <Memberphoto
        $hidden={props.$hidden}
        $userPhotoWidth={props.$userPhotoWidth}
        $userPhotoHeight={props.$userPhotoHeight}
        $userPhotoFontSize={props.$userPhotoFontSize}
        $userBorderadius={props.$userBorderadius}
        $userBorder={props.$userBorder}
        $fontWeight={props.$fontWeight}
      >
        <MemberAvatar
          src={`https://api.dicebear.com/9.x/icons/svg?scale=100&radius=20&randomizeIds=true&seed=${projectId}`}
        />
      </Memberphoto>
    </Container>
  );
}
export default ProjectAvatar;
