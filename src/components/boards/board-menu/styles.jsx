import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
export const Container = styled.div`
  /*   display: ${(props) => (props.$hidden ? "none" : "flex")}; */
  display: flex;
  width: ${(props) => (props.$hidden ? "50px" : "300px")};
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  border-right: 1px solid rgba(255, 255, 255, 0.13);

  @media only screen and (max-width: 768px) {
    align-items: center;
    width: ${(props) => (props.$hidden ? "20px" : "fit-content")};
  }
`;
export const AddBoardWrapper = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  justify-content: space-around;
  color: rgba(255, 255, 255, 0.7);
  margin: 10px 0;
  padding: 0 15px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ListWrapper = styled.div`
  margin: 0px 30px;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-around;
  border-bottom: ${(props) =>
    props.$hidden ? "none" : "1px solid rgba(255, 255, 255, 0.13);"};
  padding: ${(props) => (props.$hidden ? "0" : "15px 25px")};
  @media only screen and (max-width: 768px) {
    padding: 7px 5px;
  }
`;
export const MemberName = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-family: "Inter";
  font-size: 17px;
  font-weight: bold;
  display: ${(props) => (props.$hidden ? "none" : "flex")};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const ArrowIcon = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  margin: ${(props) => (props.$hidden ? "25px 0 0 0" : "0")};
  background-color: #22262b;
  @media only screen and (max-width: 768px) {
    margin: 0;
    font-size: 18px !important;
    padding-top: 5px;
  }
`;
export const PlusIcon = styled(AddIcon)`
  @media only screen and (max-width: 768px) {
    font-size: 18px !important;
    margin-left: 5px;
  }
`;
