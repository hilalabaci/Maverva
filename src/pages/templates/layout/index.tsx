import { PropsWithChildren } from "react";
import Navbar from "../../../components/tools/navbar";
import { Container, GlobalStyle, NavbarWrapper } from "../../home/styles";
import { BoardType } from "../../../types";

type LayoutPropsType = PropsWithChildren<{
  onBoardCrate: (board: BoardType) => void;
}>;
const Layout = ({ children, onBoardCrate }: LayoutPropsType) => {
  return (
    <Container>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar onCreate={onBoardCrate} />
      </NavbarWrapper>
      {children}
    </Container>
  );
};

export default Layout;
