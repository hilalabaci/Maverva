import React, { ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import { CollapsibleRoot } from "./styles";

type CollapsibleDemoProps = {
  trigger: ReactNode;
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CollapsibleDemo = (props: CollapsibleDemoProps) => {
  return (
    <CollapsibleRoot open={props.open} onOpenChange={props.setOpen}>
      <Collapsible.Trigger asChild>{props.trigger}</Collapsible.Trigger>
      <Collapsible.Content asChild>{props.children}</Collapsible.Content>
    </CollapsibleRoot>
  );
};

export default CollapsibleDemo;
