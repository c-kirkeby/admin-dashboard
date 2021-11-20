import { useEffect } from "react";
import { useSession } from "next-auth/react";

import { signIn } from "next-auth/react";
import { Loading } from "./Loading";

export const Auth = ({ children }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) signIn("github"); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <Loading />;
};
