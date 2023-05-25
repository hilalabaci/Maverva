import styled from "styled-components";

export const Container = styled.div`
  background-color: #181b1e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  width: 200px;
  height: 100px;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.8);
`;
export const NoteWrapper = styled.div`
  flex: 1;
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.065em;
  color: rgba(255, 255, 255, 0.7);
  resize: none;
  background-color: #181b1e;
  outline: none;
  border: none;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const LabelWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
export const iconButton=styled
