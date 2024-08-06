import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  background-color: rgba(168, 204, 255, 0.3);
  padding: 10px;
  font-family: Inter;
  border-radius: 2px;
  border-bottom: 1px solid rgba(55, 64, 73, 255);
  :hover {
    background-color: rgba(50, 57, 64, 255);
  }
  :focus-visible {
    background-color: #282e32;
  }
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
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
`;

export const Main = styled.div``;

export const MainInfo = styled.span`
  font-weight: 200;
  font-size: 13px;
`;
export const TimeInfo = styled.span`
  font-size: 11px;
  opacity: 0.5;
  margin-left: 5px;
`;
