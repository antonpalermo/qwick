import React from "react";
import { Outlet } from "react-router";

export default function Inventory() {
  React.useEffect(() => {
    window.document.title = "Inventory";

    async function getInventoryData() {
      const req = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/inventory/item`
      );

      console.log(await req.json());
    }

    getInventoryData();
  }, []);

  return (
    <div>
      <h1>Inventory</h1>
      <Outlet />
    </div>
  );
}
