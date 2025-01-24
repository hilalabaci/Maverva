import { CheckIcon } from "@radix-ui/react-icons";
import { Container, CheckboxIndicator, CheckboxRoot } from "./styles";

const CheckboxRadixUi = () => (
  <form>
    <Container>
      <CheckboxRoot defaultChecked id="c1">
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
    </Container>
  </form>
);

export default CheckboxRadixUi;
