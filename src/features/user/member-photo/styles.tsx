import styled from "styled-components";

interface ContainerProps {
  $hidden?: boolean;
  $userBorder?: string;
  $marginLeft?: string;
}

// Memberphoto için props arayüzünü tanımla
interface MemberphotoProps {
  $userPhotoWidth?: string;
  $userPhotoHeight?: string;
  $userPhotoFontSize?: string;
  $userBorderadius?: string;
  $userBorder?: string;
  $fontWeight?: string;
}
export const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  margin-left: ${(props) => props.$marginLeft};
  cursor: pointer;
  &:hover {
    border: ${(props) => props.$userBorder};
  }
`;
export const Memberphoto = styled.div<MemberphotoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$userPhotoWidth};
  height: ${(props) => props.$userPhotoHeight};
  border-radius: ${(props) => props.$userBorderadius};
  box-shadow: 0 0 0 2px
    ${(props) => props.theme.colour.avatar.background.default};
`;
export const MemberAvatar = styled.img<MemberphotoProps>`
  width: ${(props) => props.$userPhotoWidth};
  height: ${(props) => props.$userPhotoHeight};
  border-radius: ${(props) => props.$userBorderadius};
`;
