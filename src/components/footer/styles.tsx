import styled from "styled-components";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 150px;
  padding-block: 50px;
  @media only screen and (max-width: 600px) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1rem;
    gap: 2rem;
    margin-inline: 24px;
  }
`;
export const BrandInfo = styled.div`
  font-weight: 850;
  color: #2f4156;
  font-size: 14px;
  display: flex;
  gap: 7px;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
export const LinkWrapper = styled.div`
  font-size: 14px;
  color: rgba(81, 75, 129);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 600px) {
    gap: 5px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;
export const Brandlogo = styled.img`
  width: 18px;
  height: 18px;
`;
export const LinkItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-weight: 500;
  }
`;
export const IconLanguage = styled(LanguageOutlinedIcon)`
  width: 20px !important;
  height: 20px !important;
`;
export const IconSelect = styled(KeyboardArrowDownOutlinedIcon)`
  width: 20px !important;
  height: 20px !important;
`;
