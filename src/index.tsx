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
import { BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";
  const root = ReactDOM.createRoot( 
  // react dommni
    document.getElementById('root') as HTMLElement 
    // virtual dom bilan boglash
  );
  
// GI :   REDUX, MUI, ROUTER, CONTEXT, SOCKETIO

  root.render( // render method
    // Pasdan virtual dom
    <React.StrictMode>
      <Provider store={store}> {/* Props = store={store}*/}
        <ThemeProvider theme={theme}>   {/* Props = theme={theme}*/}
          <CssBaseline />
          <Router>
            <App /> {/* Argument */}
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