import * as React from "react";
import { useLoaderData, Outlet, useNavigate } from "react-router";

import Navbar from "@/components/ui/navbar";

export type Store = {
  id: string;
  name: string;
  owner: string;
  dateCreated: string;
  dateUpdated: string;
};

export default function DashboardLayout() {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  React.useEffect(() => {
    const defautStore = data.default;

    if (location.pathname === "/") {
      navigate(`/${defautStore}`, { replace: true });
    }
  }, [navigate, data.default]);

  return (
    <main>
      <Navbar stores={data.stores} />
      <div className="container mx-auto px-5">
        <Outlet />
      </div>
    </main>
  );
}
