import * as Form from "@radix-ui/react-form";
import styled from "styled-components";
export const FormRoot = styled(Form.Root)`
  background-color: ${(props) => props.theme.colour.background.default};
  color: ${(props) => props.theme.fontColour};
  width: 500px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: var(
    --ds-shadow-overlay,
    0 0 0 1px rgba(9, 30, 66, 0.08),
    0 2px 1px rgba(9, 30, 66, 0.08),
    0 0 20px -6px rgba(9, 30, 66, 0.31)
  );
`;
export const FormField = styled(Form.Field)`
  display: grid;
`;
export const FormLabelRequie = styled(Form.Label)`
  font-size: ${(props) => props.theme.fontSize.subtitle};;
  color: ${(props) => props.theme.sideBarFontColour};
  font-weight: 700;
  line-height: 30px;
  &::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: ${(props) => props.theme.requiredInfo};
  }
`;
export const FormLabel = styled(Form.Label)`
  font-size: ${(props) => props.theme.fontSize.subtitle};;
  color: ${(props) => props.theme.sideBarFontColour};
  font-weight: 700;
  line-height: 30px;
  &::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: ${(props) => props.theme.requiredInfo};
  }
`;
export const FormMessage = styled(Form.Message)`
  font-size: 13px;
  color: ${(props) => props.theme.fontColour};
  opacity: 0.8;
`;
export const InputForm = styled.input`
  font-size: ${(props) => props.theme.fontSize.default}!important;
  width: 200px;
  line-height: 1;
  all: unset;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  color: ${(props) => props.theme.fontColour};
  background-color: var(--black-a2);
  outline: 1px solid ${(props) => props.theme.sideBarFontColour};
  padding: 8px 6px;
  width: 250px;
  cursor: inherit;
  &:hover {
    background: ${(props) => props.theme.searchInputBgHover};
  }
  &:focus {
    outline: ${(props) => props.theme.searchOutlineColour};
  }
  &::selection {
    background-color: var(--black-a6);
    color: white;
  }
`;
export const TextareaForm = styled.textarea`
  resize: none;
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 116px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 15px;
  padding: 10px;
  outline: 1px solid ${(props) => props.theme.sideBarFontColour};
  &:hover {
    background: ${(props) => props.theme.searchInputBgHover};
  }
  &:focus {
    outline: ${(props) => props.theme.searchOutlineColour};
  }
  &::selection {
    background-color: var(--black-a6);
    color: white;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 24px 0px;
`;
export const ButtonCancel = styled.button`
  border: none;
  outline: none;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 15px;
  line-height: 1;
  font-weight: 400;
  height: 35px;
  padding: 0 10px;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.memberMenuFontColor};
  &:hover {
    background-color: ${(props) => props.theme.IconEditBGHover};
  }
`;
export const ButtonForm = styled.button`
  all: unset;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  font-size: 15px;
  line-height: 1;
  font-weight: 400;
  height: 35px;
  padding: 0 10px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.colour.primary.button.secondary.background.default};
  color: ${(props) => props.theme.colour.primary.button.secondary.text.default};
  box-shadow: var(
    --ds-shadow-overlay,
    0 0 0 1px rgba(9, 30, 66, 0.08),
    0 2px 1px rgba(9, 30, 66, 0.08),
    0 0 20px -6px rgba(9, 30, 66, 0.31)
  );
  &:hover {
    background-color: ${(props) =>
      props.theme.colour.primary.button.primary.background.hover};
    color: ${(props) => props.theme.colour.primary.button.primary.text.hover};
  }
  &:focus {
  }
`;

export const InfoTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.default};
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 500;
  &::after {
    content: "*";
    margin-left: 3px;
    position: relative;
    top: -2px;
    color: red;
  }
`;
export const TitleWrapper = styled.div``;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.memberMenuFontColor};
`;
