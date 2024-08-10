import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
`;
export const Memberphoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$userPhotoWidth};
  height: ${(props) => props.$userPhotoHeight};
  font-size: ${(props) => props.$userPhotoFontSize};
  border-radius: ${(props) => props.$userBorderadius};
  border: ${(props) => props.$userBorder};
  //background: linear-gradient(135deg, #71b7e6, #9b59b6);
  background-color: #de835d;
  position: relative;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  
  @media only screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
`;
