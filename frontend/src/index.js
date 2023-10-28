import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="547636078489-kfggsb7h20h7l82qihkg7ik0mnl6tgte.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
