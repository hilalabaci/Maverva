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
import { ProjectType } from "./types";
import DynamicContentLoader from "./pages/dynamicContentLoader";
import WelcomePage from "./pages/welcome-page";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SendVerificationEmail from "./pages/sendVerificationEmail";
import { GlobalStyle } from "./styles/GlobalStyle";

const { REACT_APP_GOOGLE_OAUTH_CLIENTID } = process.env;
const router = createBrowserRouter([
  { path: "/", element: <WelcomePage /> },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/verification", element: <SendVerificationEmail /> },
  {
    path: "/projects",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: `:projectKey`,
        children: [
          { index: true, element: <DynamicContentLoader /> },
          {
            path: `boards/:boardId`,
            children: [
              { index: true, element: <DynamicContentLoader /> },
              { path: `backlog`, element: <DynamicContentLoader /> },
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
