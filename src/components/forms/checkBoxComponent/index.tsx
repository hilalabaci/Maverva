import { CheckIcon } from "@radix-ui/react-icons";
import {
  Container,
  CheckboxIndicator,
  CheckboxRoot,
  CheckBoxText,
} from "./styles";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";

const CheckBoxComponent = () => {
  const { token } = useUserContext();
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("rememberMe");
    setRememberMe(saved === "true");
  }, []);

  useEffect(() => {
    if (rememberMe && token) {
      localStorage.setItem("token", token);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberMe");
    }
  }, [rememberMe, token]);

  return (
    <Container>
      <CheckboxRoot
        checked={rememberMe}
        onCheckedChange={(value) => setRememberMe(!!value)}
        $selected={rememberMe}
        id="c1"
      >
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <CheckBoxText>Remember me</CheckBoxText>
    </Container>
  );
};

export default CheckBoxComponent;
