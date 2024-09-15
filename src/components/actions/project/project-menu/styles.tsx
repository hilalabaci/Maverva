import { Link } from "react-router-dom";
import styled from "styled-components";
type CommonPropsType = {
  $hidden?: boolean;
};
export const Container = styled.div<CommonPropsType>`
  //display: ${(props) => (props.$hidden ? "none" : "flex")};
  width: ${(props) => (props.$hidden ? "20px" : "270px")};
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
  padding: 20px;
`;
export const AddProjectWrapper = styled.div<CommonPropsType>`
  font-style: normal;
  width: 100%;
  font-weight: 600;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
  letter-spacing: 0.05em;
  justify-content: space-around;
  gap: 20px;
  color: ${(props) => props.theme.fontColour};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const UserInfo = styled.div<CommonPropsType>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  flex-direction: row;
  border-bottom: ${(props) =>
    props.$hidden ? "none" : "1px solid rgba(255, 255, 255, 0.13);"};
  //padding: ${(props) => (props.$hidden ? "0" : "0")};
  @media only screen and (max-width: 768px) {
  }
`;
export const Title = styled.div`
  text-transform: uppercase;
  font-size: 12px;
`;

export const ProjectTitle = styled.span<CommonPropsType>`
  text-transform: uppercase;
  color: ${(props) => props.theme.fontColour};
  font-size: 15px;
  font-weight: bold;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ProjectIcon = styled.div<CommonPropsType>`
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  font-size: 10px;
  font-weight: 500;
  border-radius: 5px;
  background: linear-gradient(135deg, #71b7e6, #9b59b6);
  //background-color: #de835d;
  position: relative;
  color: white;
  text-transform: uppercase;
`;

export const SelectedBoard = styled.span`
  font-size: 12px;
  color: #0c66e4;
  font-weight: 400;
`;
export const BoardWrapper = styled.div`
  padding: 4px;
  border-radius: 5px;
  background: linear-gradient(
    135deg,
    rgba(113, 183, 230, 0.3),
    rgba(155, 89, 182, 0.3)
  );
`;
export const ProjectBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px;
  &:hover {
    cursor: pointer;
  }
`;
export const ProjectBoardTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProjectBoardTitle = styled.span`
  color: #0c66e4;
  font-size: 14px;
`;

export const ArrowIcon = styled.button<CommonPropsType>`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  font-size: 20px !important;
  color: #0c66e4;
  //box-shadow: rgba(9, 30, 66, 0.08) 0px 0px 0px 1px,
  // rgba(9, 30, 66, 0.08) 0px 2px 4px 1px;
  cursor: pointer;
  outline: 0px;
  transition: background-color 100ms linear, color 100ms linear,
    opacity 350ms cubic-bezier(0.2, 0, 0, 1);

  //color: ${(props) => props.theme.fontColour};
  // margin: ${(props) => (props.$hidden ? "25px 0 0 0" : "0")};
  //background-color: ${(props) => props.theme.BorderMenu};

  &:hover {
    /* background-color: #0c66e4;
    color: white; */
  }
`;
export const GetBoardsContainer = styled.div``;
export const GetBoardsList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  margin: 0;
`;
export const GetBoardsListItemLink = styled(Link)`
  text-decoration: none;
  color: rgba(68, 84, 111, 1);
`;
export const GetBoardsListItem = styled.li`
  font-size: 13px;
  padding: 16px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(
      135deg,
      rgba(113, 183, 230, 0.7),
      rgba(155, 89, 182, 0.7)
    );
  }
  &:hover ${GetBoardsListItemLink} {
    color: #0c66e4;
  }
`;
