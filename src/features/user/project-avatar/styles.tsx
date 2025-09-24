import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

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
  $hidden?: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  margin-left: ${(props) => props.$marginLeft};
  &:hover {
    border: ${(props) => props.$userBorder};
  }
`;
export const Memberphoto = styled.div<MemberphotoProps>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$userPhotoWidth};
  height: ${(props) => props.$userPhotoHeight};
  font-size: ${(props) => props.$userPhotoFontSize};
  border-radius: ${(props) => props.$userBorderadius};
  border: ${(props) => props.$userBorder};
  position: relative;
  color: #182a4e;
  text-transform: uppercase;
  font-weight: ${(props) => props.$fontWeight};

 @media ${device.mobile} {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
`;
export const MemberAvatar = styled.img``;
