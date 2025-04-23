import React from "react";
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";

export default function FinishedOrders() {
  const showEmpty = false;

  return (
    <TabPanel value="3">
      <Stack>
        {[1, 2].map((ele, index) => (
          <Box key={index} className="order-main-box">
            <Box className="order-box-scroll">
              {[1, 2, 3].map((ele2, index2) => (
                <Box key={index2} className="orders-name-price">
                  <img
                    src="/img/kebab-fresh.webp"
                    className="order-dish-img"
                    alt="dish"
                  />
                  <p className="title-dish">Kebab</p>
                  <Box className="price-box">
                    <p>$12</p>
                    <img src="/icons/close.svg" alt="close" />
                    <p>2</p>
                    <img
                      src="/icons/pause.svg"
                      alt="pause"
                      style={{ marginLeft: "15px" }}
                    />
                    <p style={{ marginLeft: "15px" }}>$24</p>

                    <p>Product price</p>
                    <p>$24</p>
                    <img
                      src="/icons/plus.svg"
                      alt="plus"
                      style={{ marginLeft: "20px" }}
                    />
                    <p>Delivery cost</p>
                    <p>$2</p>
                    <img
                      src="/icons/pause.svg"
                      alt="pause"
                      style={{ marginLeft: "20px" }}
                    />
                    <p>Total</p>
                    <p>$26</p>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}

        {showEmpty && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mt={4}
          >
            <img
              src="/icons/noimage-list.svg"
              alt="no orders"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
