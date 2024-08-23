import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  background: rgba(255, 255, 255, 0.17);
  margin-left: 15px;
  border-radius: 2px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom: 0.5px solid;
  margin: 10px;
`;
export const Title = styled.span`
  flex: 1;
  text-align: center;
  font-size: 19px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 15px;
  gap: 10px;
`;
export const CheckboxWrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
type LabelProps = {
  colour: string;
};
export const Label = styled.div<LabelProps>`
  width: 56px;
  height: 32px;
  border-radius: 2px;
  background-color: ${(props) => props.colour};
  flex: 1;
  :hover {
    opacity: 0.8;
  }
`;
