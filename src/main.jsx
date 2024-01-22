import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { Toaster } from "react-hot-toast";
import { ParallaxProvider } from "react-scroll-parallax";
import AuthProvider from "./provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ParallaxProvider>
          <RouterProvider router={router} />
          <Toaster />
        </ParallaxProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
