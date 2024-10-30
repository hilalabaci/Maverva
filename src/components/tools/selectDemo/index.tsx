import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import {
  SelectContent,
  SelectIcon,
  SelectTrigger,
  Item,
  ItemContainer,
} from "./styles";
interface SelectItemType {
  label: string;
  value: string | number;
}

interface SelectDemoProps {
  items: SelectItemType[];
  onSelect: (value: string) => void;
  selectedValue?: string | number;
}

const SelectDemo: React.FC<SelectDemoProps> = ({
  items,
  onSelect,
  selectedValue,
}) => (
  <Select.Root onValueChange={onSelect}>
    <SelectTrigger>
      <Select.Value
        placeholder={items.find((i) => i.value === selectedValue)?.label}
      />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <Select.Portal>
      <SelectContent>
        <Select.ScrollUpButton>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport>
          <Select.Group>
            {items.map((item) => (
              <SelectItem key={item.value} value={String(item.value)}>
                {item.label}
              </SelectItem>
            ))}
          </Select.Group>
          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </SelectContent>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <ItemContainer>
      <Item {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator>
          <CheckIcon />
        </Select.ItemIndicator>
      </Item>
    </ItemContainer>
  );
});

export default SelectDemo;
