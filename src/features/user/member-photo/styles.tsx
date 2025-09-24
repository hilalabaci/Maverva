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
  font-size: ${(props) => props.$userPhotoFontSize};
  border-radius: ${(props) => props.$userBorderadius};
  //background: linear-gradient(135deg, #71b7e6, #9b59b6);
  background-color: #de835d;
  color: #182a4e;
  text-transform: uppercase;
  font-weight: ${(props) => props.$fontWeight};
  box-shadow: 0 0 0 2px
    ${(props) => props.theme.colour.avatar.background.default};

`;
export const MemberAvatar = styled.img<MemberphotoProps>`
  width: ${(props) => props.$userPhotoWidth};
  height: ${(props) => props.$userPhotoHeight};
  border-radius: ${(props) => props.$userBorderadius};
`;
