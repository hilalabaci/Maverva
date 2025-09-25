import styled from "styled-components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { device } from "../../../styles/breakpoints";

export const Container = styled.div`
  position: fixed;
  inset: 0px 0px auto auto;
  z-index: 1;
  min-width: 234px;
  background-color: ${(props) => props.theme.colour.modal.background.default};
  color: ${(props) => props.theme.colour.text.inverted};
  border-radius: 2px;
  transform: translate3d(-23px, 58.5px, 0px);
  border: 1px solid ${(props) => props.theme.colour.border.default};
  box-shadow: var(
    --ds-shadow-overlay,
    0 4px 8px -2px rgba(9, 30, 66, 0.25),
    0 0 1px rgba(9, 30, 66, 0.31)
  );
  @media ${device.mobile} {
    width: 100px;
    padding: 10px 15px;
    top: -1px;
    right: -19px;
  }
`;
export const Title = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  padding: 15px;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
export const Accountdetails = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  @media ${device.mobile} {
    padding: 10px 0;
  }
`;

export const Memberinfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const MemberName = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
export const MemberEmail = styled.div`
  font-size: 12px;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
type ButtonforThemePropsType = {
  $active?: boolean;
};
export const Options = styled.ul<ButtonforThemePropsType>`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 400;
  padding: 15px;
  vertical-align: center;
  cursor: pointer;
  //border-bottom: ${(props) => props.theme.borderforModal};
  border-left: ${(props) =>
    props.$active ? props.theme.colour.border.active : "none"};
  background-color: ${(props) =>
    props.$active
      ? props.theme.colour.modal.background.active
      : props.theme.colour.modal.background.default};
  &:hover {
    background-color: ${(props) => props.theme.colour.modal.background.hover};
    color: ${(props) => props.theme.colour.modal.text.hover};
    //border-left: ${(props) => props.theme.themeActiveBorder};
  }
  @media ${device.mobile} {
    font-size: 14px;
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
  @media ${device.mobile} {
    font-size: 14px;
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
  color: ${(props) => props.theme.colour.text.inverted};
  background-color: transparent;
  font-size: 14px;
  font-weight: 400;
  flex: 1;
  cursor: pointer;
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
