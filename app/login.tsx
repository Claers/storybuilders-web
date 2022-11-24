"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export const AuthContext = createContext({ jwtToken: "", setJwtToken: (value: string) => { } })

export type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextProps = {
  jwtToken: string;
  setJwtToken: Function;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [jwtToken, setJwtToken] = useState("");
  const auth = { jwtToken, setJwtToken: Function };

  useEffect(() => {
    setJwtToken(localStorage.getItem("jwtToken") || "")
    // verifyJwtToken(jwtToken, () => { setJwtToken("") });
  }, [])

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )

}

export function Login() {
  const { jwtToken, setJwtToken } = useContext(AuthContext);

  return (
    <div>
    </div>
  )
}
