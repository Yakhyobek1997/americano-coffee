import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = null;

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack
          className="menu"
          sx={{ height: "50px" }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>

          {/* Menu Links */}
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>

            <Box className={"hover-line"}>
              <NavLink to="/">Products</NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}

            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName="underline">
                Help
              </NavLink>
            </Box>

            {/* Login or Profile */}
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <Box>
                <img
                  className="user-avatar"
                  src={"/icons/default-user.svg"}
                  aria-haspopup={"true"}
                />
              </Box>
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              World's Most Delicious Cousine
            </Box>
            <Box className={"wel-txt"}>The Choice, not just a choice</Box>
            <Box className={"service-txt"}> 24 hours service</Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button variant={"contained"} className={"signup-button"}>
                  Sign Up
                </Button>
              ) : null}
            </Box>
          </Stack>
<Box className={"logo-frame"}>
    <div className={"logo-img"}></div>
</Box>
        </Stack>
      </Container>
    </div>
  );
}
