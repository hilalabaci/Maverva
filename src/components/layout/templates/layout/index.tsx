import { PropsWithChildren } from "react";
import Navbar from "../../navbar/navbar-project";
import {
  Container,
  GlobalStyle,
  NavbarWrapper,
} from "../../../../pages/DynamicContentLoader/styles";
import { ProjectType } from "../../../../types/user.types";

type LayoutPropsType = PropsWithChildren<{
  onProjectCrate: (project: ProjectType) => void;
}>;
const Layout = ({ children, onProjectCrate }: LayoutPropsType) => {
  return (
    <Container>
      <GlobalStyle />
      <NavbarWrapper>
        <Navbar handleProjectCreate={onProjectCrate} />
      </NavbarWrapper>
      {children}
    </Container>
  );
};

export default Layout;
