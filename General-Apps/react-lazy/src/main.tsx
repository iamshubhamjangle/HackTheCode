/* eslint-disable @typescript-eslint/no-unused-vars */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./components/App.tsx";
// import ImageGallery from "./components/Gallery.tsx";
import Virtualisation from "./components/Virtualisation";
import VirtualisationWindow from "./components/VirtualisationWindow";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ImageGallery /> */}
    {/* <Virtualisation /> */}
    <VirtualisationWindow />
  </StrictMode>
);
