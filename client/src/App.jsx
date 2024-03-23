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
  AddJobs,
  ProfilePage,
  StatsPage,
  JobsPage,
  Admin,
} from "./components";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

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
        element: <DashboardPage isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            index: true,
            element: <AddJobs />,
          },
          {
            path: "stats",
            element: <StatsPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "jobs-page",
            element: <JobsPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
