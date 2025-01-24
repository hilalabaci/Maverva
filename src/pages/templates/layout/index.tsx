import { PropsWithChildren } from "react";
import Navbar from "../../../components/layout/navbar/navbar-project";
import { Container, GlobalStyle, NavbarWrapper } from "../../dynamicContentLoader/styles";
import { ProjectType } from "../../../types";

type LayoutPropsType = PropsWithChildren<{
  onProjectCrate: (project: ProjectType) => void;
}>;
const Layout = ({ children, onProjectCrate }: LayoutPropsType) => {
  return (
    <Container>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar onCreate={onProjectCrate} />
      </NavbarWrapper>
      {children}
    </Container>
  );
};

export default Layout;
