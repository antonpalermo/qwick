import React from "react";
import { Outlet } from "react-router";

export default function Inventory() {
  React.useEffect(() => {
    window.document.title = "Inventory";
  });

  return (
    <div>
      <h1>Inventory</h1>
      <Outlet />
    </div>
  );
}
