import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

window.addEventListener("load", () => {
  registerSW();
});

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("../public/sw.js");
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

serviceWorkerRegistration.register();

reportWebVitals();
