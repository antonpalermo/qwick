import * as React from "react";
import { useLoaderData, Outlet } from "react-router";

import Navbar from "@/components/ui/navbar";

export type Store = {
  id: string;
  name: string;
  owner: string;
  dateCreated: string;
  dateUpdated: string;
};

export default function DashboardLayout() {
  const store = useLoaderData();

  React.useEffect(() => {}, []);

  return (
    <main>
      <Navbar stores={store.data} />
      <div className="container mx-auto px-5">
        <Outlet />
      </div>
    </main>
  );
}
