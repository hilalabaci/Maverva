import styled from "styled-components";

export const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.65);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  background: none;
  border-radius: 5px;
  max-width: 100%;
  box-sizing: border-box;

`;
