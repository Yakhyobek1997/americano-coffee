import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { retrievePopularDishes } from "./selector";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data))
});

const popularDishesRetriever = createSelector(retrievePopularDishes, () => ({}))

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const popularDishes = useSelector(popularDishesRetriever);
  // Selector: Store => Data

    useEffect(() => {
      const product = new ProductService();
    
      product
        .getProducts({
          page: 1,
          limit: 4,
          order: "productViews",
          productCollection: ProductCollection.DISH,
        })
        .then((data) => {
          setPopularDishes(data);
        })
        .catch((err) => console.log(err));
    
      product
        .getProducts({
          page: 1,
          limit: 4,
          order: "createdAt",
        })
        .then((data) => {
          setNewDishes(data);
        })
        .catch((err) => console.log(err));

        const member = new MemberService();
member
  .getTopUsers()
  .then(data => {
    setTopUsers(data)
    // ma'lumotlar kelganda shu yerda ishlov beriladi
  })
  .catch(err => console.log(err));

    }, []);
    

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
