import React from "react";
import "../css/app.css";
import {  Container } from "@mui/material"
import { Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { UserPage } from "./screens/userPage";

function App() {
  return (
  
  <div>
  <nav>
    <ul>
    <li>
        <Link to="/member-page">HomePage</Link>
      </li>
      <li>
        <Link to="/products">ProductsPage</Link>
      </li>
      <li>
        <Link to="/orders">OrdersPage</Link>
      </li>
      <li>
        <Link to="/member-page">UsersPage</Link>
      </li>
    
    </ul>
  </nav>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
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
</div>

)
}


function Home() {
  return <Container><h2>Home</h2></Container>;
}

export default App;





