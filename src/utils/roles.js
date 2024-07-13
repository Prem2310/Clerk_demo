import { useUser } from "@clerk/clerk-react";

export const CheckRole = (role) => {
  const { user } = useUser();

  return user?.publicMetadata?.role === role;
};
