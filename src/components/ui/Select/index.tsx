// DropdownMenu.tsx
import { ReactNode } from "react";
import {
  DropDownContainer,
  DropdownContent,
  DropDownItem,
  DropDownItemWrapper,
  IconForSelect,
  IconForUnselect,
  TitleforDropDownMenu,
  DropDownItemContainer,
  DropdownMenuPrimitiveTrigger,
} from "./styles";
interface DropdownSelectMenuProps {
  triggerWidth?: boolean;
  title?: string;
  trigger: ReactNode;
  items: Array<{ label: string; action: () => void; selected?: boolean }>;
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
      <DropdownMenuPrimitiveTrigger asChild>
        {trigger}
      </DropdownMenuPrimitiveTrigger>

      <DropdownContent $triggerWidth={triggerWidth}>
        {title && <TitleforDropDownMenu>{title}</TitleforDropDownMenu>}
        <DropDownItemContainer>
          {items.map((item, index) => (
            <DropDownItemWrapper key={index}>
              <DropDownItem
                $selected={item.selected}
                className="dropdown-item"
                onSelect={item.action}
              >
                {item.label}
                {item.selected ? <IconForSelect /> : <IconForUnselect />}
              </DropDownItem>
            </DropDownItemWrapper>
          ))}
        </DropDownItemContainer>
      </DropdownContent>
    </DropDownContainer>
  );
};
