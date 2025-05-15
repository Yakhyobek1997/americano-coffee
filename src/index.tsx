import React from "react";
import ReactDOM from "react-dom/client"; 
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './app/MaterialTheme';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalsProvider } from "./hooks/GlobalsProvider"; // ✅ Yangi qo‘shiladi
import "./css/index.css";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <GlobalsProvider> {/* ✅ Bu yerga qo‘shiladi */}
            <App />
          </GlobalsProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();




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