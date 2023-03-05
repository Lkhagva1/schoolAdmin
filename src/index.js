import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserStore } from "./context/UserContext";
import { UseAuth } from "./hooks/UseAuth";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserStore>
        <UseAuth>
          <App />
        </UseAuth>
      </UserStore>
    </ChakraProvider>
  </React.StrictMode>
);
