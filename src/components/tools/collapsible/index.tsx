import React, { ReactNode } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";

type CollapsibleDemoProps = {
  trigger: ReactNode;
  children: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CollapsibleDemo = (props: CollapsibleDemoProps) => {
  return (
    <Collapsible.Root open={props.open} onOpenChange={props.setOpen}>
      <Collapsible.Trigger asChild>{props.trigger}</Collapsible.Trigger>
      <Collapsible.Content asChild>{props.children}</Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapsibleDemo;
