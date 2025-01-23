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
      try {
        // set to loading status
        setSession(prevState => ({ ...prevState, status: "loading" }));
        // make the http request to check authentication status
        const request = await fetch(`/api/auth/status`);

        if (!request.ok) {
          // if failed to send request throw an error.
          throw new Error("Failed to verify auth status");
        }

        // parse response.
        const response = await request.json();
        // if response is successfult then set the session data
        if (response.success) {
          setSession({
            status: "authenticated",
            user: response.data
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    verifyAuthState();
  }, []);

  return <Session.Provider value={session}>{children}</Session.Provider>;
}
