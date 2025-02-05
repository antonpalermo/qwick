import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import SignIn from "@/components/sign-in";
import Inventory from "@/components/inventory";
import Dashboard from "@/components/dashboard";
import CheckEmail from "@/components/check-email";

import RootLayout from "@/components/root.layout";
import SignInLayout from "@/components/sign-in.layout";
import DashboardLayout from "@/components/dashboard.layout";

import "./globals.css";

import storeLoaders from "@/loaders/store.loaders";

const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        id: "root",
        element: <DashboardLayout />,
        loader: storeLoaders.loadStores,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "inventory", element: <Inventory /> }
        ]
      },
      {
        path: "/auth",
        element: <SignInLayout />,
        children: [
          { path: "signin", element: <SignIn /> },
          { path: "check-email", element: <CheckEmail /> }
        ]
      }
    ]
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
