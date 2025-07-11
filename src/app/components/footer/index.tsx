import React from "react";
import { Box, Container, Typography, Stack, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  const authMember = null;

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        background: "rgba(20, 20, 20, 0.9)",
        backdropFilter: "blur(10px)",
        color: "#f2f2f2",
        pt: 10,
        pb: 6,
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 12 }}
          justifyContent="space-between"
        >
          {/* LEFT - LOGO & DESC */}
          <Stack spacing={3} maxWidth={360}>
            <Box component="img" src="/icons/americano.png" sx={{ width: 120 }} />
            <Typography variant="body2" color="#ccc" lineHeight={1.8}>
              Redefining beauty with confidence, wellness, and K-trends. More than skincare —
              it’s a lifestyle of self-love.
            </Typography>
            <Stack direction="row" spacing={2}>
              {["facebook", "twitter", "instagram", "youtube"].map((icon) => (
                <Box
                  key={icon}
                  component="img"
                  src={`/icons/${icon}.svg`}
                  sx={{
                    width: 26,
                    height: 26,
                    transition: "0.3s ease",
                    opacity: 0.7,
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.15)",
                      opacity: 1,
                    },
                  }}
                />
              ))}
            </Stack>
          </Stack>

          {/* CENTER - NAVIGATION */}
          <Stack spacing={1.5}>
            <Typography fontWeight={600} fontSize={18}>
              Bo‘limlar
            </Typography>
            <MuiLink component={Link} to="/" underline="none" color="#aaa" sx={{ "&:hover": { color: "#fff" } }}>
              Home
            </MuiLink>
            <MuiLink component={Link} to="/products" underline="none" color="#aaa" sx={{ "&:hover": { color: "#fff" } }}>
              Products
            </MuiLink>
            {authMember && (
              <MuiLink component={Link} to="/orders" underline="none" color="#aaa" sx={{ "&:hover": { color: "#fff" } }}>
                Orders
              </MuiLink>
            )}
            <MuiLink component={Link} to="/help" underline="none" color="#aaa" sx={{ "&:hover": { color: "#fff" } }}>
              Help
            </MuiLink>
          </Stack>

          {/* RIGHT - CONTACT */}
          <Stack spacing={1.2}>
            <Typography fontWeight={600} fontSize={18}>
              Contact
            </Typography>
            <Typography fontSize={14}>
              <strong>L.</strong> Downtown, Geoje
            </Typography>
            <Typography fontSize={14}>
              <strong>P.</strong> +82 10 2153 2309
            </Typography>
            <Typography fontSize={14}>
              <strong>E.</strong> devexuz@gmail.com
            </Typography>
            <Typography fontSize={14}>
              <strong>H.</strong> Visit 24/7
            </Typography>
          </Stack>
        </Stack>

        {/* Divider */}
        <Box mt={8} mb={4} sx={{ height: 1, backgroundColor: "#555", opacity: 0.2 }} />

        {/* COPYRIGHT */}
        <Typography textAlign="center" fontSize={13} color="#999">
          © {new Date().getFullYear()} Yahyo Sobirjonov. All rights reserved.
        </Typography>

        {/* Background visual (optional) */}
        <Box
          sx={{
            position: "absolute",
            right: -80,
            bottom: -80,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(87, 73, 50, 0.25) 0%, transparent 80%)",
            filter: "blur(60px)",
            zIndex: 0,
          }}
        />
      </Container>
    </Box>
  );
}
