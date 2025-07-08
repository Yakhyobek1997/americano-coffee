import { Box, Stack, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import "../../../css/home.css";

const stats = [
  { num: "1000", suffix: "k+", label: "Products" },
  { num: "8", suffix: "", label: "Experience" },
  { num: "50", suffix: "+", label: "Menu" },
  { num: "300", suffix: "k+", label: "Clients" },
];

export default function Statistics() {
  return (
    <Box className="static-frame homepage">
      <Container>
        <Stack className="info">
          {stats.map((stat, index) => (
            <Box
              key={index}
              className="static-box"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <Typography className="static-num">
                <CountUp
                  start={0}
                  end={parseInt(stat.num)}
                  duration={2}
                  separator=","
                />
                {stat.suffix}
              </Typography>
              <Typography className="static-text">{stat.label}</Typography>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
