import React, { useContext } from "react";
import { myContext } from "./Context";

function Nav() {
  const { setSignin, details } = useContext(myContext);
  return (
    <div>
      <section>
        <h1>LOGO</h1>
      </section>
      <section>
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">Tech</a>
        <button
          onClick={() => {
            setSignin(false);
          }}
        >
          Logout
        </button>
      </section>
    </div>
  );
}

export default Nav;
