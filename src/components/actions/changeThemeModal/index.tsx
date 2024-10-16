import { Container, Wrapper, ImgforTheme } from "./styles";
import { useTheme } from "../../../contexts/ThemeContext";
import DarkThemeImg from "../../../../public/icons/dark.png";

function ChangeThemeModal() {
  const { changeMode, mode, theme } = useTheme();
  const HandlerChangeLight = () => {
    if (mode === "dark") {
      changeMode("light");
    }
  };
  const HandlerChangeDark = () => {
    if (mode === "light") {
      changeMode("dark");
    }
  };
  return (
    <Container color={theme.primary}>
      <Wrapper onClick={HandlerChangeLight} active={mode === "light"}>
        <ImgforTheme src="/icons/ligt.png" />
        Light
      </Wrapper>
      <Wrapper onClick={HandlerChangeDark} active={mode === "dark"}>
        <ImgforTheme src="/icons/dark.png" />
        Dark
      </Wrapper>
    </Container>
  );
}
export default ChangeThemeModal;
