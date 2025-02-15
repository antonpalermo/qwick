import React from "react";
import useSession from "./hooks/use-session";

export default function Inventory() {
  const session = useSession();

  React.useEffect(() => {
    window.document.title = "Inventory";

    async function getInventoryData() {
      const req = await fetch(`/api/inventory/item`);

      console.log(await req.json());
    }

    getInventoryData();
  }, []);

  if (session.status === "loading") {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-lg sm:text-3xl font-bold">Inventory</h1>
    </div>
  );
}
