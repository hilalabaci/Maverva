import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: fixed;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #ffff;
`;
export const BrandWrapper = styled.div``;

export const BrandContainer = styled.a`
  color: ${(props) => props.theme.memberMenuFontColor};
  display: flex;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 39px;
  gap: 5px;
  padding-inline-start: 150px;
  cursor: pointer;
  /* identical to box height */
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const NavbarSignWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const ButtonForLogintonNavbar = styled.a`
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.memberMenuFontColor};
  font-weight: 500;
  font-size: 16px;
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: 1.5px solid #fca700;
  border-radius: 5px;
  transition: 750ms outline;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  &:hover {
    outline: 2px solid #ff8b00;
    transition: 150ms outline;
  }
`;
export const ButtonForGetStartonNavbar = styled.a`
  border: none;
  outline: none;
  color: ${(props) => props.theme.primary};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #2f4156;
  background: #fca700;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31);
  cursor: pointer;
  &:hover {
    background: #ff8b00;
  }
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
