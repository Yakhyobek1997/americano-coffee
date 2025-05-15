import React, { useState } from "react";
import { GlobalContext } from "./useGlobals";
import { Member } from "../lib/types/member";

export const GlobalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [authMember, setAuthMember] = useState<Member | null>(null);
  const [orderBuilder, setOrderBuilder] = useState<Date>(new Date());

  return (
    <GlobalContext.Provider
      value={{
        authMember,
        setAuthMember,
        orderBuilder,
        setOrderBuilder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
