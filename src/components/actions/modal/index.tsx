import React, { PropsWithChildren } from "react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as Dialog from "@radix-ui/react-dialog";
import { Backdrop, ModalContent } from "./styles";

type ModalPropsType = PropsWithChildren<{
  onClose: () => void;
  style?: React.CSSProperties;
  noBackdrop?: boolean;
  trigger?: React.ReactElement;
  open?: boolean;
  onChange?: (open: boolean) => void;
}>;
function Modal(props: ModalPropsType) {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.onChange}>
      <Dialog.Trigger asChild={!!props.trigger}>{props.trigger}</Dialog.Trigger>
      <Dialog.Portal>
        {!props.noBackdrop && <Backdrop />}
        <VisuallyHidden.Root>
          <Dialog.Title></Dialog.Title>
        </VisuallyHidden.Root>
        <ModalContent style={props.style}>{props.children}</ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
export default Modal;
