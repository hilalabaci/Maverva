import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 61px;
  right: -13px;
  background-color: rgba(255, 255, 255, 0.16);
  width: 200px;
  font-family: "Inter";
  color: rgba(255, 255, 255, 0.7);
  padding: 15px;
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.13);
`;
export const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
`;
export const Accountdetails = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  gap: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
`;
export const Memberphoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 100px;
  background-color: #fff;
  position: relative;
  color: black;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  font-family: "Inter";
`;
export const Memberinfo = styled.div``;
export const MemberName = styled.div`
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
`;
export const MemberEmail = styled.div`
  font-size: 12px;
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
`;
