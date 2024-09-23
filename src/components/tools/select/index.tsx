// DropdownMenu.tsx
import { ReactNode } from "react";
import {
  DropDownContainer,
  DropdownContent,
  DropDownItem,
  DropDownItemWrapper,
  IconForSelect,
  TitleforDropDownMenu,
} from "./styles";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

interface DropdownSelectMenuProps {
  triggerWidth?: boolean;
  title?: string;
  trigger: ReactNode;
  items: Array<{ label: string; action: () => void; isSelected?: boolean }>;
  $hidden?: boolean;
}

export const DropdownSelectMenu: React.FC<DropdownSelectMenuProps> = ({
  trigger,
  items,
  triggerWidth,
  title,
}) => {
  return (
    <DropDownContainer>
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownContent $triggerWidth={triggerWidth}>
        {title && <TitleforDropDownMenu>{title}</TitleforDropDownMenu>}
        <DropDownItemWrapper>
          {items.map((item, index) => (
            <DropDownItem
              key={index}
              $isSelected={item.isSelected}
              className="dropdown-item"
              onSelect={item.action}
            >
              {item.isSelected ? <IconForSelect /> : ""}
              {item.label}
            </DropDownItem>
          ))}
        </DropDownItemWrapper>
      </DropdownContent>
    </DropDownContainer>
  );
};
