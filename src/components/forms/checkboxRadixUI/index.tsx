import { CheckIcon } from "@radix-ui/react-icons";
import { Container, CheckboxIndicator, CheckboxRoot } from "./styles";
import { useState } from "react";

const CheckboxRadixUi = () => {
  const [checked, setChecked] = useState(false);

  return (
    <form>
      <Container>
        <CheckboxRoot
          checked={checked}
          onCheckedChange={(value) => setChecked(!!value)}
          $selected={checked}
          id="c1"
        >
          <CheckboxIndicator>
            <CheckIcon />
          </CheckboxIndicator>
        </CheckboxRoot>
      </Container>
    </form>
  );
};

export default CheckboxRadixUi;
