import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import SendingContext from "./components/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SendingContext>
    <App />
  </SendingContext>
);
