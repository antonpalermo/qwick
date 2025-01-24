import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import SignIn from "@/components/sign-in";
import SignInLayout from "@/components/sign-in.layout";
import Inventory from "@/components/inventory";
import Dashboard from "@/components/dashboard";
import DashboardLayout from "@/components/dashboard.layout";

import CheckEmail from "./components/check-email";
import SessionProvider from "./components/providers/session";

import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SessionProvider>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
          <Route path="auth" element={<SignInLayout />}>
            <Route path="signin" element={<SignIn />} />
            <Route path="check-email" element={<CheckEmail />} />
          </Route>
        </Routes>
      </SessionProvider>
    </BrowserRouter>
  </StrictMode>
);
