import * as Toggle from "@radix-ui/react-toggle";
import styled from "styled-components";
export const ToggleRoot = styled(Toggle.Root)`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
`;
