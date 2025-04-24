import { useState } from "react";

interface AuthMember {
  memberImage?: string;
  memberType?: string;
  memberNick?: string;
  memberAddress?: string;
}

export function useGlobals() {
  const [value, setValue] = useState(null);
  const [authMember, setAuthMember] = useState<AuthMember | null>(null);

  return { value, setValue, authMember, setAuthMember };
}