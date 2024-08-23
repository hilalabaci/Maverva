import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const Container = styled.div`
  position: absolute;
  top: 45px;
  right: -5px;
  z-index: 1;
  min-width: 234px;
  background-color: ${(props) => props.theme.modalBg};
  color: ${(props) => props.theme.memberMenuFontColor};
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.borderLineColour};
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  @media only screen and (max-width: 768px) {
    width: 100px;
    padding: 5px;
    top: 52px;
    right: -14px;
  }
`;
export const Title = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  padding: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const Accountdetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  @media only screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;
export const Memberphoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  color: ${(props) => props.theme.primary};
  background-color: rgb(222, 131, 93);
  position: relative;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }
`;
export const Memberinfo = styled.div``;
export const MemberName = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 9px;
  }
`;
export const MemberEmail = styled.div`
  font-size: 12px;
  @media only screen and (max-width: 768px) {
    font-size: 5px;
  }
`;
type ButtonforThemePropsType = {
  $active?: boolean;
};
export const Options = styled.div<ButtonforThemePropsType>`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  padding: 15px;
  vertical-align: center;
  border-bottom: ${(props) => props.theme.borderforModal};
  border-left: ${(props) =>
    props.$active ? props.theme.themeActiveBorder : "none"};
  background-color: ${(props) =>
    props.$active ? props.theme.themeActiveBG : props.theme.modalBg};
  &:hover {
    background-color: ${(props) => props.theme.memberMenuHoverBg};
    // color: ${(props) => props.theme.themeActiveColor};
    //border-left: ${(props) => props.theme.themeActiveBorder};
  }
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    padding: 10px 0;
  }
`;
export const Logout = styled.div`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  padding: 5px;
  &:hover {
    background-color: transparent;
  }

  @media only screen and (max-width: 768px) {
    font-size: 10px;
    padding: 5px 0;
  }
`;

export const ButtonforTheme = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  outline: none;
  border: none;
  padding: 0;
  color: ${(props) => props.theme.fontColour};
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  flex: 1;
  ${Options}:hover & {
    background-color: transparent;
  }
`;
export const ArrowforButton = styled(KeyboardArrowRightIcon)`
  font-size: 20px !important;
`;
export const IconforManaAccount = styled(ManageAccountsIcon)`
  font-size: 20px !important;
`;
