import React from "react";
import user1 from "../user/user1.png";
import { Container, UserImg } from "./styles";

function User() {
  return (
    <Container>
      <UserImg src={user1} />
    </Container>
  );
}
export default User;
