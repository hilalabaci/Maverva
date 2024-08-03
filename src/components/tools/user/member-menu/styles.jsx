import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50px;
  right: -5px;
  background-color: rgba(255, 255, 255, 0.16);
  width: 200px;
  font-family: "Inter";
  color: ${(props) => props.theme.fontColour};
  padding: 15px;
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.borderLineColour};
  @media only screen and (max-width: 768px) {
    width: 100px;
    padding: 5px;
    top: 52px;
    right: -14px;
  }
`;
export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const Accountdetails = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
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
  background-color: ${(props) => props.theme.fontColour};
  position: relative;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  font-family: "Inter";
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
export const Options = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: "Inter";
  padding: 10px 0;
  vertical-align: center;
  :focus {
    background-color: #a1bdd914;
  }
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    padding: 10px 0;
  }
`;
export const Logout = styled.div`
  font-size: 14px;
  font-weight: 400;
  font-family: "Inter";
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.13);
  :focus {
    background-color: #a1bdd914;
  }
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    padding: 5px 0;
  }
`;
