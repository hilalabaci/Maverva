import styled from "styled-components";
type CommonPropsType = {
  $hidden?: boolean;
};
export const Container = styled.div<CommonPropsType>`
  //display: ${(props) => (props.$hidden ? "none" : "flex")};
  display: flex;
  align-items: center;
  //width: ${(props) => (props.$hidden ? "50px" : "250px")};
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  border-right: 1px solid ${(props) => props.theme.borderLineColour};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px,
    inset rgba(0, 0, 0, 0.23) 0px 1px 1px;
  background-color: ${(props) => props.theme.BorderMenuBG};
  @media only screen and (max-width: 768px) {
    align-items: center;
    width: ${(props) => (props.$hidden ? "20px" : "fit-content")};
  }
`;
export const AddProjectWrapper = styled.div<CommonPropsType>`
  font-style: normal;
  font-weight: 600;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  justify-content: space-around;
  color: ${(props) => props.theme.fontColour};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ListWrapper = styled.div<CommonPropsType>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const UserInfo = styled.div<CommonPropsType>`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-around;
  border-bottom: ${(props) =>
    props.$hidden ? "none" : "1px solid rgba(255, 255, 255, 0.13);"};
  padding: ${(props) => (props.$hidden ? "0" : "15px 25px")};
  @media only screen and (max-width: 768px) {
  }
`;
export const MemberName = styled.span<CommonPropsType>`
  color: ${(props) => props.theme.fontColour};

  font-size: 17px;
  font-weight: bold;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ArrowIcon = styled.div<CommonPropsType>`
  color: ${(props) => props.theme.fontColour};
  font-size: 20px !important;
  margin: ${(props) => (props.$hidden ? "25px 0 0 0" : "0")};
  background-color: ${(props) => props.theme.BorderMenu};
  @media only screen and (max-width: 768px) {
    margin: 0;
    font-size: 18px !important;
    padding-top: 5px;
  }
`;
