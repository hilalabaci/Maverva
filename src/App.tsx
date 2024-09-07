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
    path:"/projects",
    element:<Projects/>
  }
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
