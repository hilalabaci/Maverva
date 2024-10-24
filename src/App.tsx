import "./App.css";
import Home from "./pages/dynamicContentLoader";
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
import Backlog from "./pages/contents/backlog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        element: (
          <Projects
            onProjectChange={function (project: ProjectType): void {
              throw new Error("Function not implemented.");
            }}
          />
        ),
      },
      {
        path: "/projects",
        children: [
          {
            index: true,
            element: (
              <Projects
                onProjectChange={function (project: ProjectType): void {
                  throw new Error("Function not implemented.");
                }}
              />
            ),
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
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function PrivateRoute() {
  const { user, isLoading } = useUserContext();

  if (isLoading) return <>Loading...</>;

  if (!user || !user._id) return <Navigate to="/login" />;

  return <Outlet />;
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ApplicationProvider>
          <RouterProvider router={router} />
        </ApplicationProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
