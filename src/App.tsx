import "./App.css";
import Home from "./pages/home";
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
import { BoardType } from "./types";
const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/projects",
    element: (
      <Projects
        onBoardChange={function (board: BoardType): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    children: [
      {
        path: `:projectKey`,
        element: <Home />,
      },
    ],
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
