import { JSX } from "react/jsx-runtime";

// Define the Productt type and ProductCollection enum
enum ProductCollection {
  DISH = "DISH",
}

interface Productt {
  _id: string;
  productName: string;
  productPrice: number;
  productViews: number;
  productCollection: ProductCollection;
  productImages: string[];
  productSize: string;
  productVolume: string | null;
}

const products: Productt[] = [
  {
    _id: "1",
    productName: "Cutlet",
    productPrice: 10,
    productViews: 100,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/cutlet.webp"],
    productSize: "Medium",
    productVolume: null,
  },
  {
    _id: "2",
    productName: "Kebab",
    productPrice: 15,
    productViews: 200,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/kebab-fresh.webp"],
    productSize: "Large",
    productVolume: null,
  },
  {
    _id: "3",
    productName: "Kebab",
    productPrice: 12,
    productViews: 150,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/kebab.webp"],
    productSize: "Small",
    productVolume: null,
  },
  {
    _id: "4",
    productName: "Lavash",
    productPrice: 8,
    productViews: 80,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/lavash.webp"],
    productSize: "Medium",
    productVolume: null,
  },
  {
    _id: "5",
    productName: "Lavash",
    productPrice: 8,
    productViews: 90,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/lavash.webp"],
    productSize: "Medium",
    productVolume: null,
  },
  {
    _id: "6",
    productName: "Cutlet",
    productPrice: 10,
    productViews: 110,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/cutlet.webp"],
    productSize: "Medium",
    productVolume: null,
  },
  {
    _id: "7",
    productName: "Kebab",
    productPrice: 15,
    productViews: 250,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/kebab.webp"],
    productSize: "Large",
    productVolume: null,
  },
  {
    _id: "8",
    productName: "Kebab",
    productPrice: 15,
    productViews: 300,
    productCollection: ProductCollection.DISH,
    productImages: ["/img/kebab-fresh.webp"],
    productSize: "Large",
    productVolume: null,
  },
];


  export default  Productt