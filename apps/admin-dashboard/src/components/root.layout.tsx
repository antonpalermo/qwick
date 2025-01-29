import { Outlet } from "react-router";

import SessionProvider from "@/components/providers/session";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Outlet />
    </SessionProvider>
  );
}
