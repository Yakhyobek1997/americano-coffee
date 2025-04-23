import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";

interface PausedOrdersProps {
    setValue: (input: string) => void;
  }

  export default function PausedOrders(props: PausedOrdersProps) {
    const showEmpty = false;
    const { setValue } = props;

    return (
      <TabPanel value="1">
        <Stack>
          {[1, 2].map((ele, index) => {
            return (
              <Box key={index} className="order-main-box">
                <Box className="order-box-scroll">
                  {[1, 2, 3].map((ele2, index2) => {
                    return (
                      <Box key={index2} className="orders-name-price">
                        <img
                          src="/img/lavash.webp"
                          className="order-dish-img"
                          alt="lavash"
                        />
                        <p className="title-dish">Lavash</p>
                        <Box className="price-box">
                          <p>$9</p>
                          <img src="/icons/close.svg" alt="close" />
                          <p>2</p>
                          <img src="/icons/pause.svg" alt="pause" />
                          <p style={{ marginLeft: "15px" }}>$24</p>
                        </Box>
  
                        <Box mt={2}>
                          <Button
                            variant="contained"
                            color="secondary"
                            className="cancel-button"
                          >
                            Cancel
                          </Button>
                          <Button variant="contained" className="pay-button">
                            Payment
                          </Button>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
  
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