import React from "react";
import "../css/app.css";
import {  Container } from "@mui/material"
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";

function App() {

  const location = useLocation()
  console.log(location)

  return (
  
  <>
  
  {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}

  <Switch>
    <Route path="/products">
      <ProductsPage />
    </Route>
    <Route path="/orders">
      <OrdersPage />
    </Route>
    <Route path="/member-page">
      <UserPage />
    </Route>
    <Route path="/">
      <HomePage />
    </Route>
  </Switch>
  <Footer/>
</>

)
}


function Home() {
  return <Container><h2>Home</h2></Container>;
}

export default App;





