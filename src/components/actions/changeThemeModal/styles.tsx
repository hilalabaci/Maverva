import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 234px;
  right: 256px;
  z-index: 1;
  background-color: ${(props) => props.theme.modalBg};
  color: ${(props) => props.theme.fontColour};
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.borderLineColour};
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  width: 170px;
  gap: 10px;
  padding: 1px;
  border-radius: 3px;
  font-weight: 400;
`;

type WrapperPropsType = {
  active?: boolean;
};
export const Wrapper = styled.button<WrapperPropsType>`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  padding: 6px 12px;
  border: none;
  outline: none;
  padding: 8px 5px;
  background-color: ${(props) => props.theme.modalBg};
  color: ${(props) => props.theme.fontColour};
  ${(props) => props.active && activeStyle}
`;

const activeStyle = css`
  background-color: ${(props) => props.theme.themeActiveBG};
  color: ${(props) => props.theme.themeActiveColor};
  border-left: ${(props) => props.theme.themeActiveBorder};
`;

export const ImgforTheme = styled.img`
  width: 90px;
`;
