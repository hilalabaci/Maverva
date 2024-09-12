// DropdownMenu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import "./styles.css";

interface DropdownMenuProps {
  trigger: ReactNode;
  items: Array<{ label: string; action: () => void }>;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  items,
}) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Content className="dropdown-content">
        {items.map((item, index) => (
          <DropdownMenuPrimitive.Item
            key={index}
            className="dropdown-item"
            onSelect={item.action}
          >
            {item.label}
          </DropdownMenuPrimitive.Item>
        ))}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};
