import styled from "styled-components";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

export const Container = styled.div`
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.default};
  font-weight: 400;
  outline: none;
  gap: 10px;
  &:hover {
    transform: translateX(5px);
  }
`;
export const Title = styled.span``;
export const IconTodo = styled(RestartAltIcon)`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-size: 20px !important;
`;
export const IconInProgress = styled(RotateRightIcon)`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-size: 20px !important;
`;
export const IconDone = styled(PublishedWithChangesIcon)`
  color: ${(props) => props.theme.memberMenuFontColor};
  font-size: 20px !important;
`;
