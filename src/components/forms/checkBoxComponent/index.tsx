import { CheckIcon } from "@radix-ui/react-icons";
import {
  Container,
  CheckboxIndicator,
  CheckboxRoot,
  CheckBoxText,
} from "./styles";
import { useState } from "react";

type CheckBoxProps = {
  text?: string;
  onCheckedChange?: (checked: boolean) => void;
};

const CheckBoxComponent = ({ text, onCheckedChange }: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
    const handleCheckedChange = (value: boolean) => {
    setChecked(!!value);
    onCheckedChange?.(!!value);
  };

  return (
    <Container>
      <CheckboxRoot
        checked={checked}
        onCheckedChange={handleCheckedChange}
        $selected={checked}
        id="c1"
      >
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <CheckBoxText>{text}</CheckBoxText>
    </Container>
  );
};

export default CheckBoxComponent;
