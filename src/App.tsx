import "./App.css";
import Register from "./pages/register";
import Login from "./pages/login";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { UserProvider, useUserContext } from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";
import { ApplicationProvider } from "./contexts/ApplicationContext";
import Projects from "./pages/projects";
import DynamicContentLoader from "./pages/dynamicContentLoader";
import WelcomePage from "./pages/welcome-page";
import { GoogleOAuthProvider } from "@react-oauth/google";
import VerifyEmailPage from "./pages/verificationEmail-page";
import { GlobalStyle } from "./styles/GlobalStyle";
import VerifyCodePage from "./pages/verificationCode-page";
import RecoveryLink from "./pages/recovery-link";
import ResetPassword from "./pages/reset-password";

const { REACT_APP_GOOGLE_OAUTH_CLIENTID } = process.env;
const router = createBrowserRouter([
  // Public route
  { path: "/", element: <WelcomePage /> },
  { path: "/signup", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/login/verify-email/otp", element: <VerifyEmailPage /> },
  { path: "/login/reset-password", element: <RecoveryLink /> },
  { path: "/login/reset-password/link", element: <ResetPassword /> },
  { path: "/signup/verify-email/otp", element: <VerifyCodePage /> },

  // Private
  {
    path: "/projects",
    element: <PrivateRoute />,
    children: [
      { index: true, element: <Projects /> },
      {
        path: `:projectKey`,
        children: [
          { index: true, element: <DynamicContentLoader /> },
          {
            path: `boards/:boardId`,
            children: [
              { index: true, element: <DynamicContentLoader /> },
              { path: `backlog`, element: <DynamicContentLoader /> },
              {
                path: `sprints/:sprintId`,
                children: [{ index: true, element: <DynamicContentLoader /> }],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function PrivateRoute() {
  const { user, isLoading } = useUserContext();

  if (isLoading) return <>Loading...</>;
  if (user) {
    <Navigate to="projects" />;
  }
  if (!user || !user.Id) return <Navigate to="/login" />;

  return <Outlet />;
}

function App() {
  return (
    <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_OAUTH_CLIENTID!}>
      <GlobalStyle />
      <ThemeProvider>
        <UserProvider>
          <ApplicationProvider>
            <RouterProvider router={router} />
          </ApplicationProvider>
        </UserProvider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
