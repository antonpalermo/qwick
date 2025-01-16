import React from "react";
import Session from "../contexts/session";

export default function useSession() {
  return React.useContext(Session);
}
