import styled from "styled-components";
import Diversity1Icon from "@mui/icons-material/Diversity1";
export const GenerelWrapper = styled.div`
  width: 354px;
  background-color: #282e32;
  color: ${(props) => props.theme.fontColour};
  font-weight: 600;
  font-family: Inter;
  border-radius: 2px;
  padding: 15px 20px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
`;
export const Title = styled.h3``;
export const IconAddedPerson = styled(Diversity1Icon)``;
export const PersonInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(55, 64, 73, 255);
  border-bottom: 1px solid rgba(55, 64, 73, 255);
`;
export const MailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
`;
export const Maildetail = styled.span`
  font-weight: 400;
`;
export const Maildetailsmall = styled.span`
  font-size: 11px;
  font-weight: 400;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;
