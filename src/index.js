import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { UseAuth } from "./hooks/UseAuth";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <UseAuth>
        <App />
      </UseAuth>
    </ChakraProvider>
  </React.StrictMode>
);
