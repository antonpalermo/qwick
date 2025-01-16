import React from "react";

import { Button } from "@/components/ui/button";
import useSession from "./hooks/use-session";

export default function Dashboard() {
  const session = useSession();

  console.log(session)

  React.useState(() => {
    window.document.title = "Dashboard";
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>New Entry</Button>
      <Button>Scan Item</Button>
    </div>
  );
}
