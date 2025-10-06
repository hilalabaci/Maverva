// DropdownMenu.tsx
import React, { ReactNode } from "react";
import {
  DropdownContent,
  DropDownItem,
  DropdownMenuPrimitivePortal,
  DropdownMenuPrimitiveRoot,
  DropdownMenuPrimitiveSubContent,
  DropdownMenuPrimitiveSubTrigger,
  DropdownMenuSub,
  RightSlot,
} from "./styles";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface DropdownMenuProps {
  triggerWidth?: boolean;
  trigger: ReactNode;
  items?: Array<DropdownMenuItem>;
}

interface DropdownMenuItem {
  label: string;
  action: (event: Event) => void;
  subItems?: Array<Omit<DropdownMenuItem, "subItems">>;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
  triggerWidth,
}) => {
  return (
    <DropdownMenuPrimitiveRoot>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownContent $triggerWidth={triggerWidth}>
        {items?.map((item) =>
          item.subItems?.length ? (
            <React.Fragment key={item.label}>
              <DropdownMenuSub>
                <DropdownMenuPrimitiveSubTrigger>
                  {item.label}
                  <RightSlot>
                    <ChevronRightIcon />
                  </RightSlot>
                </DropdownMenuPrimitiveSubTrigger>
                <DropdownMenuPrimitivePortal>
                  <DropdownMenuPrimitiveSubContent
                    sideOffset={2}
                    alignOffset={-5}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <DropDownItem key={subIndex} onSelect={subItem.action}>
                        {subItem.label}
                      </DropDownItem>
                    ))}
                  </DropdownMenuPrimitiveSubContent>
                </DropdownMenuPrimitivePortal>
              </DropdownMenuSub>
            </React.Fragment>
          ) : (
            <React.Fragment key={item.label}>
              <DropDownItem key={item.label} onSelect={item.action}>
                {item.label}
              </DropDownItem>
            </React.Fragment>
          )
        )}
      </DropdownContent>
    </DropdownMenuPrimitiveRoot>
  );
};
