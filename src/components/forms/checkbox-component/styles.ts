import * as Checkbox from "@radix-ui/react-checkbox";
import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

type FormProps = { $selected: boolean };

export const Container = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 15px;
 @media ${device.mobile} {
    padding: 5px 0 5px 15px;
  }
`;

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
export const CheckBoxText = styled.span`
  color: #172b4d;
  font-size: ${(props) => props.theme.fontSize.default};
  opacity: 0.7;
  font-weight: 500;
`;
