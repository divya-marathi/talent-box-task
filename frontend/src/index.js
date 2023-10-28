import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="1054313674399-0rd1oavdh8limfcqh8gffvi20q1grq32.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
