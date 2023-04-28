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
    <div className="main">
      <h3 className="h3">Login form</h3>
      <input className="input"
        type="text"
        placeholder="ussername"
        onChange={(e) => {
          setDetails({ ...details, name: e.target.value });
        }}
      />
      <br />
      <input className="input"
        type="password"
        placeholder="password"
        onChange={(e) => {
          setDetails({ ...details, password: e.target.value });
        }}
      />
      <br />
      <button className="button" onClick={Changeout}>Login</button>
    </div>
  );
}

export default Login;
