import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ClientProvider } from "./redux/services/ClientProvider";

const element = document.getElementById("root")!;
const queryClient = new QueryClient();

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <ClientProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ClientProvider>
  </React.StrictMode>
);
