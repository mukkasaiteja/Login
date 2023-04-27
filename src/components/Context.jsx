import { createContext, useState } from "react";

export const myContext = createContext();

function SendingContext({ children }) {
  const [singin, setSignin] = useState(false);
  const [details, setDetails] = useState({ name: "", password: "" });

  return (
    <myContext.Provider value={{ singin, setSignin, details, setDetails }}>
      {children}
    </myContext.Provider>
  );
}
export default SendingContext;
