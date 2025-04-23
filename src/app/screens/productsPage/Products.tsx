import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Box,
  Button,
  Container,
  Stack,
  Badge,
  Pagination,
  PaginationItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Product {
  productName: string;
  imagePath: string;
}

const products: Product[] = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

const ProductCollection = {
  OTHER: "other",
  DESSERT: "dessert",
  DRINK: "drink",
  SALAD: "salad",
  DISH: "dish",
};

export default function Products() {
  const [searchText, setSearchText] = useState("");
  const [productSearch, setProductSearch] = useState({
    order: "",
    productCollection: "",
    page: 1,
  });

  const searchProductHandler = () => {
    console.log("Searching for:", searchText);
  };

  const searchOrderHandler = (orderKey: string) => {
    setProductSearch((prev) => ({ ...prev, order: orderKey }));
  };

  const searchCollectionHandler = (collectionKey: string) => {
    setProductSearch((prev) => ({ ...prev, productCollection: collectionKey }));
  };

  const paginationHandler = (event: any, page: any) => {
    setProductSearch((prev) => ({ ...prev, page }));
  };

  return (
    <div className={"products"}>
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Stack className={"top-text"}>
              <p>Burak Restaurant</p>
              <Stack className={"single-search-big-box"}>
                <input
                  type={"search"}
                  className={"single-search-input"}
                  name={"singleResearch"}
                  placeholder={"Type here"}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") searchProductHandler();
                  }}
                />
                <Button
                  className={"single-button-search"}
                  variant="contained"
                  endIcon={<SearchIcon />}
                  onClick={searchProductHandler}
                >
                  Search
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              {["createdAt", "productPrice", "productViews"].map((key) => (
                <Button
                  key={key}
                  variant={"contained"}
                  className={"order"}
                  color={productSearch.order === key ? "primary" : "secondary"}
                  onClick={() => searchOrderHandler(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
              ))}
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className={"category-main"}>
                {Object.entries(ProductCollection).map(([key, val]) => (
                  <Button
                    key={key}
                    variant={"contained"}
                    color={
                      productSearch.productCollection === val ? "primary" : "secondary"
                    }
                    onClick={() => searchCollectionHandler(val)}
                  >
                    {val.charAt(0).toUpperCase() + val.slice(1)}
                  </Button>
                ))}
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.slice(0.8).map((product, index) => {
                  const imagePath = `${product.imagePath ?? "/img/default-image.webp"}`;
                  return (
                    <Stack
                      key={index}
                      className={"product-card"}
                    >
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        <div className={"product-sale"}></div>
                        <Button>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "30px" }}>
                          <Badge
                            badgeContent={0}
                            color="secondary"
                          >
                            <RemoveRedEyeIcon sx={{ color: "gray" }} />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>{product.productName}</span>
                        <div className={"product-desc"}>
                          <MonetizationOnIcon /> 0
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available!</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={Math.ceil(products.length / 4)}
              page={productSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>
    
  

      <div className={"brands-logo"}>
        <Container className={"family-brands"}>
          <Box className={"category-title"}>Our Family Brands</Box>
          <Stack className={"brand-list"}>
            <Box className={"review-box"}>
              <img src={"/img/gurme.webp"} />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/sweets.webp"} />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/seafood.webp"} />
            </Box>
            <Box className={"review-box"}>
              <img src={"/img/doner.webp"} />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "70px", border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26173.616004841315!2d128.63200525!3d34.9139272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skr!4v1745399784411!5m2!1sen!2skr"
              width="1320"
              height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
