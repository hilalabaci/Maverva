import styled from "styled-components";

export const Container = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.fontColour};
  padding-left: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
