import * as Checkbox from "@radix-ui/react-checkbox";
import styled from "styled-components";

type FormProps = { $selected: boolean };

export const CheckboxRoot = styled(Checkbox.Root).attrs<FormProps>((props) => ({
  $selected: props.$selected,
}))`
  background-color: ${(props) =>
    props.$selected
      ? props.theme.colour.primary.button.primary.background.default
      : props.theme.colour.background.default};
  outline: ${(props) => props.theme.colour.modal.border.default};
  width: 18px;
  height: 18px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:focus {
    //background-color: ${(props) => props.theme.checkboxCheckedBg};
  }
`;
export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: white;
`;
export const Container = styled.div`
  display: "flex";
  align-items: "center";
`;
