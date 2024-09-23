import styled from "styled-components";

export const TitleForCheckbox = styled.h1`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-size: 20px;
  line-height: 1.5;
  font-weight: normal;
  padding: 0 0 0 5px;
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
  padding: 9px;
  background-color: #0c66e4;
  outline: none;
  border: none;
  border-radius: 2px;
  color: white;
  margin-right: 7px;
  &:hover {
     background-color: ${(props) => props.theme.submitButtonHover};
  }
`;
export const BackButton = styled.button`
  color: ${(props) => props.theme.fontColour};
  //background-color: ${(props) => props.theme.modalBg};
  border: none;
  outline: none;
  font-size: 14px;
  padding: 9px;
  border-radius: 2px;
  padding: 9px;
  background-color: ${(props) => props.theme.modalInputBg};
`;
export const CancelButton = styled.button`
  color: ${(props) => props.theme.fontColour};
  background-color: ${(props) => props.theme.modalBg};
  border: none;
  outline: none;
  font-size: 14px;
  padding: 9px;
  border-radius: 2px;
  padding: 9px;
  margin: 0 20px 0 0;
  &:hover {
    background-color: ${(props) => props.theme.modalInputBg};
  }
`;
