import React from "react";
import Session from "../contexts/session";

export interface SessionProviderProps {
  children: React.ReactNode;
}

export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  verified: boolean;
}

export interface SessionState {
  user: User | undefined;
  status: "loading" | "unauthenticated" | "authenticated";
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const [session, setSession] = React.useState<SessionState>({
    status: "unauthenticated",
    user: undefined
  });

  React.useEffect(() => {
    async function verifyAuthState() {
      const req = await fetch(`/api/auth/status`);

      if (!req.ok) {
        return;
      }

      setSession(prevState => ({ ...prevState, status: "loading" }));

      const response = await req.json();

      if (response.success) {
        setSession({
          status: "authenticated",
          user: response.data
        });
      }
    }

    verifyAuthState();
  }, []);

  return <Session.Provider value={session}>{children}</Session.Provider>;
}
