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
  EditJobs,
} from "./components";

import { loader as editJobLoader } from "./components/EditJobs/EditJobs";
import { action as editJobAction } from "./components/EditJobs/EditJobs";
//import { action as deleteJobAction } from "./components/DeleteJobs/DeleteJobs";
import { loader as adminLoader } from "./components/Admin/Admin";
import { action as profileAction } from "./components/ProfilePage/ProfilePage";
import { loader as statsLoader } from "./components/StatsPage/StatsPage";
import { loader as jobsLoader } from "./components/JobsPage/JobsPage";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

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
            loader: statsLoader,
          },
          {
            path: "profile",
            element: <ProfilePage />,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "jobs-page",
            element: <JobsPage />,
            loader: jobsLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJobs />,
            loader: editJobLoader,
            action: editJobAction,
          },
          // {
          //   path: "delete-job/:id",
          //   action: deleteJobAction,
          // },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
