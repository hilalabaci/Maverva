import styled from "styled-components";

export const TitleForCheckbox = styled.h1`
  font-size: 20px;
  line-height: 1.5;
  font-weight: normal;
  padding: 0 0 0 5px;
  color: ${(props) => props.theme.colour.text.inverted};
`;

export const WrapperforCheckbox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 5px 0 0 0;
  gap: 10px;
`;
export const InputStyleForCheckbox = styled.input`
  border-radius: 50px;
`;
export const TitleforLabel = styled.label`
  font-size: 15px;
`;
export const Details = styled.div`
  font-size: 13px;
`;
export const NextButton = styled.button`
  font-size: 14px;
  font-weight: 550;
  padding: 9px;
  background-color: ${(props) =>
    props.theme.colour.primary.button.primary.background.default};
  outline: none;
  border: none;
  border-radius: 3px;
  color: ${(props) => props.theme.colour.primary.button.primary.text.default};
  margin-right: 7px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.primary.background.hover};
  }
`;
export const BackButton = styled.button`
  color: ${(props) => props.theme.colour.text.primary};
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  padding: 9px;
  border-radius: 2px;
  padding: 9px;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
`;
export const CancelButton = styled.button`
  color: ${(props) => props.theme.colour.text.primary};
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 3px;
  padding: 9px;
  margin: 0 20px 0 0;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.secondary.background.hover};
  }
`;
