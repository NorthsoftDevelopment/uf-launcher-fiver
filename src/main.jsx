import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-efoclx3oif6amatk.us.auth0.com"
      clientId="LuMaEkoKnJ0OPfVRoUfNclpRA0BzhpRm"
      authorizationParams={{
        redirect_uri: 'https://inhonia-launcher.vercel.app/auth/complete',
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
