import { Container, Wrapper, ImgforTheme } from "./styles";
import { useTheme } from "../../contexts/ThemeContext";
import lightThemeImg from "../../assets/images/lightTheme.png";
import darkThemeImg from "../../assets/images/darkTheme.png";

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
    <Container color={theme.colour}>
      <Wrapper onClick={HandlerChangeLight} active={mode === "light"}>
        <ImgforTheme src={lightThemeImg} />
        Light
      </Wrapper>
      <Wrapper onClick={HandlerChangeDark} active={mode === "dark"}>
        <ImgforTheme src={darkThemeImg} />
        Dark
      </Wrapper>
    </Container>
  );
}
export default ChangeThemeModal;
