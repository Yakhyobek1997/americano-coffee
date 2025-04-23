import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import moment from "moment";


interface ProcessOrdersProps {
    setValue: (input: string) => void;
  }
  


    export default function ProcessOrders(props: ProcessOrdersProps) {
        const showEmpty = false; // true qilsangiz "no image" chiqadi
        const { setValue } = props;
        return (
          <TabPanel value="2">
            <Stack>
              {[1, 2].map((ele, index) => (
                <Box key={index} className="order-main-box">
                  <Box className="order-box-scroll">
                    {[1, 2].map((ele2, index2) => (
                      <Box key={index2} className="orders-name-price">
                        <img
                          src="/img/kebab.webp"
                          className="order-dish-img"
                          alt="dish"
                        />
                        <p className="title-dish">Kebab</p>
                        <Box className="price-box">
                          <p>$11</p>
                          <img src="/icons/close.svg" alt="close" />
                          <p>2</p>
                          <img
                            src="/icons/pause.svg"
                            alt="pause"
                            style={{ marginLeft: "15px" }}
                          />
                          <p style={{ marginLeft: "15px" }}>$22</p>
                        </Box>
      
                        <Box className="data-compl" mt={2}>
                          <p>{moment().format("YY-MM-DD HH:mm")}</p>
                          <Button variant="contained" className="verify-button">
                            Verify to Fulfil
                          </Button>
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