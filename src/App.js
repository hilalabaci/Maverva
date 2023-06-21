import React from "react";
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
]);

function PrivateRoute() {
  const { user, isLoading } = useUserContext();

  if (isLoading) return <>Loading...</>;
  
  if (!user || !user._id) return <Navigate to="/login" />;

  return <Outlet />;
}

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
