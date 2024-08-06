import styled from "styled-components";
import Markdown from "react-markdown";

export const Container = styled.div`
  background-color: ${(props) =>
    props.$isRead ? props.theme.ModalBg : "  rgba(168, 204, 255, 0.3);"};
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
    Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 15px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 13px;
  text-transform: initial;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
`;

export const Main = styled.div``;

export const MainInfo = styled(Markdown)`
  font-weight: 200;
  font-size: 13px;
  margin: 0;
`;
export const TimeInfo = styled.span`
  font-size: 11px;
  opacity: 0.5;
  margin-left: 5px;
`;
