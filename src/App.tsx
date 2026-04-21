import "./App.css";
import Register from "./pages/Auth/RegisterPage";
import Login from "./pages/Auth/LoginPage";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { UserProvider, useUserContext } from "./contexts/UserContext";
import ThemeProvider from "./contexts/ThemeContext";
import { ApplicationProvider } from "./contexts/ApplicationContext";
import LandingPage from "./pages/LandingPage/LandingPageNew";
import { GoogleOAuthProvider } from "@react-oauth/google";
import VerifyEmailPage from "./pages/Auth/VerificationEmailPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { AuthGlobalStyle } from "./styles/AuthGlobalStyle";
import VerifyCodePage from "./pages/Auth/VerificationCodePage";
import RecoveryLink from "./pages/Auth/RecoveryLinkPage";
import ResetPassword from "./pages/Auth/ResetPasswordPage";
import Projects from "./pages/ProjectsPage";
import DynamicContentLoader from "./pages/DynamicContentLoader";
import SprintPage from "./pages/Sprint";
import ListPageRoute from "./pages/ListPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
const { REACT_APP_GOOGLE_OAUTH_CLIENTID } = process.env;
const router = createBrowserRouter([
  // Public route
  { path: "/", element: <LandingPage /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/login/verify-email/otp", element: <VerifyEmailPage /> },
  { path: "/login/reset-password", element: <RecoveryLink /> },
  { path: "/login/reset-password/continue", element: <ResetPassword /> },
  { path: "/register/verify-email/otp", element: <VerifyCodePage /> },

  // Private
  {
    path: "/projects",
    element: <PrivateRoute />,
    children: [
      { index: true, element: <Projects /> },
      {
        path: `:projectKey`,
        children: [
          { index: true, element: <Navigate to="/projects" /> },
          {
            path: `boards/:boardId`,
            children: [
              { index: true, element: <Navigate to="/projects" />},
              { path: `backlog`, element: <DynamicContentLoader /> },
              { path: `list`, element: <ListPageRoute /> },
              {
                path: `sprints/:sprintId`,
                children: [{ index: true, element: <SprintPage /> }],
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

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
      <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_OAUTH_CLIENTID!}>
        <GlobalStyle />
        <AuthGlobalStyle />
        <ThemeProvider>
          <UserProvider>
            <ApplicationProvider>
              <RouterProvider router={router} />
            </ApplicationProvider>
          </UserProvider>
        </ThemeProvider>
      </GoogleOAuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
