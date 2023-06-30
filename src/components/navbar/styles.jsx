import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
#root,
#root > div {
  min-height: 100vh;
}
`;

export const NavbarContainer = styled.nav`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  padding: 15px;
  justify-content: space-between;
 
`;
export const BrandContainer = styled.a`
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */
  @media only screen and (max-width: 768px) {
   font-size: 20px;
  }
`;
export const BrandLogo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 20px;
  @media only screen and (max-width: 768px) {
   width: 20px;
   height: 20px;
   margin: 0px 10px;
  }
`;

export const SearchUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;
export const UserWrapper = styled.div``;
export const SearchWrapper = styled.div``;
