import styled from "styled-components";

export const Container = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
