import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { SelectContent, SelectIcon, SelectTrigger, Item } from "./styles";

const SelectDemo = () => (
  <Select.Root>
    <SelectTrigger>
      <Select.Value />
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
            <SelectItem value="apple">To Do</SelectItem>
            <SelectItem value="banana">In Progress</SelectItem>
            <SelectItem value="blueberry">Done</SelectItem>
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

const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Item {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator>
          <CheckIcon />
        </Select.ItemIndicator>
      </Item>
    );
  }
);

export default SelectDemo;
