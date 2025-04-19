import React from "react";
import ReactDOM from "react-dom/client"; 
// Asosiy qismi// Reconsilation
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './app/MaterialTheme';
import "./css/index.css";
import { BrowserRouter as Router } from "react-router-dom";

  const root = ReactDOM.createRoot( 
  // react dommni
    document.getElementById('root') as HTMLElement 
    // virtual dom bilan boglash
  );
  
  root.render(
    // Pasdan virtual dom
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );

reportWebVitals();




/*Reconciliation bu React’ning ichki 
mexanizmi bo‘lib, u Virtual DOM orqali 
yangilanishlar aniqlanib, real DOM’ga faqat 
kerakli o‘zgarishlarni tezroq ishlatishni
ta’minlaydi.*/

// Declorative =
// 