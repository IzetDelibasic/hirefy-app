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
