import { FcGoogle } from "react-icons/fc";
import { Button, GoogleSignWrapper, Text } from "./styles";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../../contexts/UserContext";
import { useGoogleLogin } from "@react-oauth/google";
import { loginGoogle as loginGoogleApi } from "../../../../api/auth-api";

type loginGooglePropsType = {
  borderRadius?: keyof typeof import("../../../../theme/tokens/borderRadius").default;
};

const GoogleAuthButton = ({ borderRadius }: loginGooglePropsType) => {
  const navigate = useNavigate();
  const { setUser, setToken } = useUserContext();

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const user = await loginGoogleApi(tokenResponse.access_token);
      if (user.ok && user.data) {
        setUser(user.data.user);
        setToken(user.data.token);
        setTimeout(() => {
          navigate("/projects");
        }, 100);
      }
    },
    onError: (tokenResponse) => console.error(tokenResponse),
  });

  return (
    <GoogleSignWrapper>
      <Button
        onClick={() => loginGoogle()}
        aria-label="Login with Google"
        borderRadius={borderRadius}
      >
        <FcGoogle size={25} />
        <Text>Continue with Google</Text>
      </Button>
    </GoogleSignWrapper>
  );
};

export default GoogleAuthButton;
