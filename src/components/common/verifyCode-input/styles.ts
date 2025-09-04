import styled from "styled-components";

export const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const CodeInputWrapper = styled.div`
  border: ${(props) => props.theme.colour.border.default};
  border-radius: 3px;
  padding: 8px 6px;
  box-sizing: border-box;
  width: 45px;
  height: 45px;
`;
export const CodeInput = styled.input.attrs({
    type: "text",
    "aria-label": "Please enter OTP character 1",
    maxLength: 1,
    autoComplete: "one-time-code",
})`
  border: none;
  outline: none;
  padding-block-start: 8px;
  padding-inline-start: 6px;
  padding-inline-end: 6px;
  padding-block-end: 8px;
  font-size: 20px;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100%;
`;
