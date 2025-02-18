import React from "react";
import ReactDOM from "react-dom/client"; // Make sure to use the correct import
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure 'root' exists in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
