import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductTracker from "./context/ProductTrackerCtx/ProductTracker.jsx";
import RouteContext from "./context/routerHandler/RouteContext.jsx";
import Toast from "./context/reactToast/Toast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductTracker>
    <Toast>
      <RouteContext>
        <App />
      </RouteContext>
    </Toast>
  </ProductTracker>
);
