import styled from "styled-components";

type ContainerPropsType = {
  $isRead?: boolean;
};

export const Container = styled.div<ContainerPropsType>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 4px;
  transition: background-color 0.15s ease;
  &:hover {
    background-color: ${(props) => props.theme.colour.modal.background.hover};
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`;

export const UserInfo = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding-top: 2px;
`;

export const Info = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 3px;
`;

export const UserName = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 1.4;
  color: ${(props) => props.theme.colour.text.primary};
`;

export const MessageText = styled.span`
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  color: ${(props) => props.theme.colour.text.primary};
  word-break: break-word;
`;

export const TimeInfo = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${(props) => props.theme.colour.text.primary};
  opacity: 0.55;
  white-space: nowrap;
`;

export const UnreadDot = styled.span`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #0c66e4;
  margin-left: 10px;
  align-self: center;
`;

export const GroupLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${(props) => props.theme.colour.text.primary};
  opacity: 0.55;
  padding: 10px 16px 4px;
`;
