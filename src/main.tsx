import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { store } from "@/store/index.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <HeroUIProvider>
          <ToastProvider />
          <App />
        </HeroUIProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
