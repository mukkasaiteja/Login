import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";

import React, { useContext } from "react";
import { myContext } from "./components/Context";
function App() {
  const {signin}=useContext(myContext);
  return (
    <div>
     { signin ? <div><Nav/><Home/></div>:<Login/>}
     
    
    
    </div>
  );
}

export default App;
