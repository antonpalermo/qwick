import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import SignIn from "@/components/sign-in";
import SignInLayout from "@/components/sign-in.layout";
import Dashboard from "@/components/dashboard";
import DashboardLayout from "@/components/dashboard.layout";

import Inventory from "@/components/inventory";

import "./globals.css";
import CheckEmail from "./components/check-email";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "inventory",
        element: <Inventory />
      }
    ]
  },
  {
    path: "/auth",
    element: <SignInLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />
      },
      {
        path: "check-email",
        element: <CheckEmail />
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
