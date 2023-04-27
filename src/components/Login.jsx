import React, { useContext } from "react";
import { myContext } from "./Context";

function Login() {
  const { setSignin, details, setDetails } = useContext(myContext);

  const Changeout = () => {
    if (
      details.name === "saiteja" && details.password === "saiteja@123" ||  details.name === "admin" && details.password === "admin@123") {
      setSignin(true);
    } else {
      alert("Enter valid details");
    }
  };

  return (
    <div>
      <h3>Login form</h3>
      <input
        type="text"
        placeholder="ussername"
        onChange={(e) => {
          setDetails({ ...details, name: e.target.value });
        }}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setDetails({ ...details, password: e.target.value });
        }}
      />
      <br />
      <button onClick={Changeout}>Login</button>
    </div>
  );
}

export default Login;
