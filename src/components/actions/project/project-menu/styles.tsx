import styled from "styled-components";
type CommonPropsType = {
  $hidden?: boolean;
};
export const Container = styled.div<CommonPropsType>`
  //display: ${(props) => (props.$hidden ? "none" : "flex")};
  width: ${(props) => (props.$hidden ? "20px" : "240px")};
  height: 100vh;
  background-color: ${(props) => props.theme.BorderMenuBG};
  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.$hidden ? "20px" : "fit-content")};
  }
  /* ::after pseudo-element */
  &::after {
    display: inline-block;
    width: var(240px, 0px);
    content: "";
  }
`;

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 10px;
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
  width: 100%;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.$hidden ? "none" : "1px solid rgba(255, 255, 255, 0.13);"};
  //padding: ${(props) => (props.$hidden ? "0" : "0")};
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
