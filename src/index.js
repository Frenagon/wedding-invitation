import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { NavigationProvider } from "./context/Navigation";
import GlobalStyles, { CornerBorder } from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <GlobalStyles />
      <CornerBorder top left />
      <CornerBorder top right rotate="90deg" />
      <CornerBorder bottom left rotate="-90deg" />
      <CornerBorder bottom right rotate="180deg" />
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
