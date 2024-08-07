import styled from "styled-components";
import Markdown from "react-markdown";

export const Container = styled.div`
  background-color: ${(props) =>
    props.$isRead ? props.theme.ModalBg : "  rgba(168, 204, 255, 0.3);"};
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto",
    "Oxygen", Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 15px 0;
  font-size: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.span`
  font-weight: 600;
  font-size: 13px;
  text-transform: capitalize;
`;
export const Info = styled.div`
  gap: 2px;
  padding: 2px;
  display: flex;
`;

export const Main = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const MainInfo = styled(Markdown)`
  font-weight: 500;
  margin: 0;
`;
export const TimeInfo = styled.span`
  opacity: 0.5;
`;
