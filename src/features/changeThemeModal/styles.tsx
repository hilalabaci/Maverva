import styled, { css } from "styled-components";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
  cursor: pointer;
  position: fixed;
  transform: translate3d(-178px, 45.5px, 0px);
  background-color: ${(props) => props.theme.colour.modal.background.default};
  color: ${(props) => props.theme.colour.text.primary};
  border: ${(props) => props.theme.colour.modal.border.default};
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.default};
  width: 170px;
  gap: 10px;
  padding: 1px;
  border-radius: 3px;
  font-weight: 400;
  @media ${device.mobile} {
    width: 120px;
    transform: translate3d(-139px, 45.5px, 0px);
  }
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
  background-color: ${(props) => props.theme.colour.modal.background.default};
  /* color: ${(props) =>
    props.active
      ? props.theme.colour.modal.text.active
      : props.theme.colour.modal.text.default}; */
  color: ${(props) => props.theme.colour.modal.text.default};
  ${(props) => props.active && activeStyle}
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      props.active
        ? props.theme.colour.modal.text.active
        : props.theme.colour.text.primary};
  }
  @media ${device.mobile} {
    font-size: ${(props) => props.theme.fontSize.default};
  }
`;

const activeStyle = css`
  background-color: ${(props) => props.theme.colour.modal.background.active};
  color: ${(props) => props.theme.colour.modal.text.active};
  border-left: ${(props) => props.theme.colour.modal.border.active};
`;

export const ImgforTheme = styled.img`
  width: 90px;
  @media ${device.mobile} {
    display: none;
  }
`;
