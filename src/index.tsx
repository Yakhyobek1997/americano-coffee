import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./app/context/ConextProvider";
import { SocketProvider } from "./app/context/SocketProvider";
import "./css/index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <SocketProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <App />
            </Router>
          </ThemeProvider>
        </SocketProvider>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);



/*Reconciliation bu 


React’ning
u Virtual 
DOM orqali 
yangilanishlar aniqlanib, 
real DOM’ga faqat 
kerakli o‘zgarishlarni
ishlatishni
ta’minlaydi.


*/

// Declorative =
// 