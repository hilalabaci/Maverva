import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.projectColour};
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 3px;
  max-height: max-content;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.projectColour};
  z-index: 1;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 29px;
  color: ${(props) => props.theme.searchPlaceHolderFontColour};
  margin-left: 10px;
  display: inline-block;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
