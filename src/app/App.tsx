import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage";
// homePage.tsx qidiradi topomasa homePage/index.tsx
import ProductsPage from "./screens/productsPage";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";

// 1) Routing systemni qurib page dan page ga o'tishni taminlaydi.
// 2) Screen componentlardan tashkil topkan
// -- Header va Footer oralig'i screen components --
// ByDefault file - index.tsx deyiladi
// Hook = signal

function App() { // Parametr
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}

      <Switch>{/* Faqat mos keladigan compni render qiladi */}
        <Route path="/products">
          <ProductsPage />
        </Route>

        <Route path="/orders">
          <OrdersPage />
        </Route>

        <Route path="/member-page">
          <UserPage />
        </Route>

        <Route path="/help">
          <HelpPage />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;






