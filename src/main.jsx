import { Buffer } from 'buffer';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
let loader=document.getElementById("loadera");
if (document.getElementById("loadera")) {
    loader.remove();
}

if (!window.Buffer) {
    window.Buffer = Buffer;
}