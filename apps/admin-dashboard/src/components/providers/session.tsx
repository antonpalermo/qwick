import React from "react";
import Session from "../contexts/session";

export interface SessionProviderProps {
  children: React.ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const [status, setStatus] = React.useState(false);

  React.useEffect(() => {
    async function verifyAuthState() {
      const req = await fetch(`/api/auth/status`);

      if (!req.ok) {
        setStatus(false);
      }

      setStatus(true);
    }

    verifyAuthState();
  }, []);

  return <Session.Provider value={status}>{children}</Session.Provider>;
}
