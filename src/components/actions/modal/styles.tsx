import styled from "styled-components";

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: none;
  border-radius: 2px;
  box-sizing: border-box;
`;
