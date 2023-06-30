import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  padding-left: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
