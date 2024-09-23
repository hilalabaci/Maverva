// DropdownMenu.tsx
import { ReactNode } from "react";
import { DropdownContent, DropDownItem } from "./styles";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface DropdownMenuProps {
  triggerWidth?: boolean;
  trigger: ReactNode;
  items: Array<{ label: string; action: () => void }>;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
  triggerWidth,
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownContent $triggerWidth={triggerWidth}>
        {items.map((item, index) => (
          <DropDownItem
            key={index}
            className="dropdown-item"
            onSelect={item.action}
          >
            {item.label}
          </DropDownItem>
        ))}
      </DropdownContent>
    </DropdownMenuPrimitive.Root>
  );
};
