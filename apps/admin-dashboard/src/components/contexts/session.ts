import React from "react";

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

const Session = React.createContext<SessionState>({
  user: undefined,
  status: "unauthenticated"
});

export default Session;
