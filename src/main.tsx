import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { OverlayContextProvider } from "./context/overlayContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <OverlayContextProvider>
        <App />
      </OverlayContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
