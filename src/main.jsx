import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material";


const userFetch = await fetch("http://localhost:3000/getUserByJWT", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});
const user = await userFetch.json();
console.log("🚀 ~ file: main.jsx:19 ~ user:", user)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App user={user} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
