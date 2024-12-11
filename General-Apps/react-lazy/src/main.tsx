import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./components/App.tsx";
import ImageGallery from "./components/Gallery.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <ImageGallery />
  </StrictMode>
);
