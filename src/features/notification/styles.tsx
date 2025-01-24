import styled from "styled-components";
//import Markdown from "react-markdown";

type ContainerPropsType = {
  $isRead?: boolean;
};
export const Container = styled.div<ContainerPropsType>`
  background-color: ${(props) =>
    props.$isRead ? props.theme.ModalBg : "  rgba(168, 204, 255, 0.3);"};
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  padding: 15px 0;
  font-size: 12px;
  border-radius: 3px;
  &:hover {
    background-color: var(--ds-background-neutral-subtle-hovered, #f4f5f7);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;
export const UserInfo = styled.div`
  display: flex;
`;
export const UserName = styled.div`
  font-weight: 600;
  font-size: 13px;
  text-transform: capitalize;
  overflow: hidden;
  word-wrap: break-word;
`;
export const Info = styled.div`
  gap: 2px;
  padding: 2px;
  display: flex;
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  overflow: hidden;
`;

export const TimeInfo = styled.span`
  opacity: 0.5;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 400;
`;
