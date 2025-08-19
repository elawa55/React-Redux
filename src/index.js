import React from "react";
// ========================
// we edit that elawa 
// تم تغيير ReactDOM.render إلى createRoot لتوافق React 18
// ========================
import { createRoot } from "react-dom/client";
// ========================
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// ========================
// we edit that elawa 
// تم استخدام createRoot API بدلاً من ReactDOM.render
// ========================
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// ========================
