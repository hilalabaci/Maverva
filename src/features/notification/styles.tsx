import styled from "styled-components";

type ContainerPropsType = {
  $isRead?: boolean;
};
export const Container = styled.div<ContainerPropsType>`
  background-color: ${(props) =>
    props.$isRead
      ? props.theme.colour.modal.background.default
      : "  rgba(168, 204, 255, 0.3);"};
  padding: 15px 10px;
  font-size: ${(props) => props.theme.fontSize.subtitle};
  border-radius: 3px;
  &:hover {
    background-color: ${(props) => props.theme.colour.modal.background.hover};
    cursor: pointer;
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
  font-size: ${(props) => props.theme.fontSize.subtitle};
  font-weight: 400;
`;
