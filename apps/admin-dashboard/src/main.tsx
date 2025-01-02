import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import Dashboard from "@/components/dashboard";
import Inventory from "@/components/inventory";
import Item from "@/components/item";

import "./globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />}>
          <Route path=":id" element={<Item />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
