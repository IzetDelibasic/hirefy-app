// - React -
import React from "react";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
// - Components -
import HomePage from "./components/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
