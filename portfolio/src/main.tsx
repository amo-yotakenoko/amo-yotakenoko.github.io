import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import * as Application from "./page/Application";
import { PompomPatternPage } from "./page/PompomPatternPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/virtualrobot",
    element: <Application.VirtualRobot />,
  },
  {
    path: "/amo-yo",
    element: <Application.Amoyo />,
  },
  {
    path: "/pompom_pattern",
    element: <PompomPatternPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
