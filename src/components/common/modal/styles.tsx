import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { device } from "../../../styles/breakpoints";

export const Backdrop = styled(Dialog.Overlay)`
  background: #10121499;
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
  box-shadow: var(--ds-shadow-overlay, 0 8px 9pt #091e4226, 0 0 1px #091e424f);
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${device.mobile} {
    height: 100vh;
    width: 100%;
  }
`;
