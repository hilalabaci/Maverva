import styled from "styled-components";
import Markdown from "react-markdown";

export const Container = styled.div`
  width: 320px;
  padding: 10px;
  background-color: ${(props) =>
    props.$isRead ? props.theme.ModalBg : "  rgba(168, 204, 255, 0.3);"};
  font-family: Inter;
  border-bottom: ${(props) => props.theme.borderforModal};
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
`;
export const Title = styled.h2``;
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
