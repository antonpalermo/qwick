import React from "react";

import { Button } from "@/components/ui/button";

export default function Dashboard() {
  React.useEffect(() => {
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
