import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Backdrop = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.4);
  inset: 0;
  overflow: auto;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background: none;
  border-radius: 2px;
  box-sizing: border-box;
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
