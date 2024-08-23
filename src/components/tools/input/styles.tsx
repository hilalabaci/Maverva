import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;
export const TextWrapper = styled.span`
  font-size: 18px;
  text-align: start;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: whitesmoke;
  &:hover {
    border-color: #9b59b6;
  }
`;
export const Inputs = styled.input`
  height: 45px;
  outline: none;
  border: none;
  padding-left: 15px;
  font-size: 18px;
  border-radius: 2px;
  background-color: whitesmoke;
  border-bottom-width: 2px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  flex: 1;

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Icon = styled(CheckCircleIcon)`
  color: green;
  padding: 0 10px;
  transition: all 0.3s ease;
`;
export const WarningMessage = styled.p`
  color: #dc3545;
`;
