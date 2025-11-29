import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import OldApp from "./App.tsx";
import * as Application from "./page/Application.tsx";
import { PompomPatternPage } from "./page/PompomPatternPage.tsx";
import NewPage from "./NewPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewPage />,
  },
  {
    path: "/old",
    element: <OldApp />,
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
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
