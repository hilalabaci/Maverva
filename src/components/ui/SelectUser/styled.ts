import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  font-family: "Inter", sans-serif;
`;

export const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: #888;
  }

  span {
    flex: 1;
    margin-left: 8px;
  }
`;

export const Placeholder = styled.span`
  color: #999;
  font-size: 14px;
`;

export const Dropdown = styled.div`
  background: ${(props) => props.theme.colour.background.default};
  border: ${(props) => props.theme.colour.divider.border.default};
  border-radius: 3px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: max-content;
  min-width: 160px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: 0.2s;
  color: ${(props) => props.theme.colour.text.primary};

  &:hover {
    background: ${(props) => props.theme.colour.modal.background.hover};
  }
`;

export const Chevron = styled.div<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? "180deg" : "0deg")});
  transition: 0.2s;
`;
export const SelectedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.colour.text.highlightColor};
  gap: 5px;
`;
