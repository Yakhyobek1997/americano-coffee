import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/** REACT APP STATE **/
export interface AppRootState {
  ordersPage: any; // AppRootStat object va 2 ta proporty bor
  productsPage: any; // 1) productsPage va turi any
  homePage: HomePageState; // 2) homePage turi homePage , ovqatlar yoki top userlar bo‘lishi 
}

export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}


/** PRODUCTS **/

export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}


/** ORDERS **/

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}



/*
Interface - suz shu malumotni yuborasi boshqasini emas
*/