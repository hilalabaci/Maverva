import { forwardRef } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import { UserType } from "../../../types";
import { Container, MemberAvatar, Memberphoto } from "./styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

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

const MemberPhoto = forwardRef<HTMLDivElement, MemberPhotoProps>(
  (props, ref) => {
    const user = props.user;
    
    const profilePhotoUrl =
      user?.ProfilePicture ||
      `https://api.dicebear.com/9.x/initials/svg?backgroundColor=b6e3f4,c0aede,d1d4f9&scale=100&radius=50&randomizeIds=true&seed=${user?.FullName}`;
    const hasValidProfile = !!user?.ProfilePicture || !!user?.FullName;
    return (
      <Container
        ref={ref}
        style={{ zIndex: props.style?.zIndex }}
        $hidden={props.$hidden}
        $marginLeft={props.$marginLeft}
      >
        {hasValidProfile ? (
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
        ) : (
          <Stack direction="row" spacing={2}>
            <Avatar src="/broken-image.jpg" sx={{ width: 24, height: 24 }} />
          </Stack>
        )}
      </Container>
    );
  }
);

MemberPhoto.displayName = "MemberPhoto";

export default MemberPhoto;
