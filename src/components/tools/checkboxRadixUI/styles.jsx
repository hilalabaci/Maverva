import * as Checkbox from "@radix-ui/react-checkbox";
import styled from "styled-components";
export const CheckboxRoot = styled(Checkbox.Root)`
  background-color: white;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => props.theme.borderforModal};
  &:hover {
    background-color: var(--violet-3);
  }
  &:focus {
    //background-color: ${(props) => props.theme.checkboxCheckedBg};
  }
`;
export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${(props) => props.theme.memberMenuFontColor};
`;
export const Container = styled.div`
  display: "flex";
  align-items: "center";
`;
