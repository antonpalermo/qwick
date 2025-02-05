import { useLoaderData, Outlet, Navigate } from "react-router";

import Navbar from "@/components/ui/navbar";

export type Store = {
  id: string;
  name: string;
  owner: string;
  dateCreated: string;
  dateUpdated: string;
};

export default function DashboardLayout() {
  const loader = useLoaderData();

  if (!loader.success) {
    return <Navigate to={"/auth/signin"} />;
  }

  return (
    <main>
      <Navbar data={loader.data} />
      <div className="container mx-auto px-5">
        <Outlet />
      </div>
    </main>
  );
}
