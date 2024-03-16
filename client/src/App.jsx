// - React -
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// - Components -
import {
  HomePage,
  LandingPage,
  RegisterPage,
  LoginPage,
  DashboardPage,
  ErrorPage,
} from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
