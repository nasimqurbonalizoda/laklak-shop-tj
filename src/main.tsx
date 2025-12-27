import React from "react";
import { Toaster } from 'react-hot-toast'
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/api/store/store"
import App from "./App";
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
            borderRadius: '12px',
          },
          success: {
            icon: '✅',
            style: { background: '#10b981' },
          },
        }}
      />
    </Provider>
  </React.StrictMode>
);
