import { useState } from "react";
import "./Header.css";
import NavBarMobile from "../NavBar/NavBarMobile";
import { LinkToTop } from "../../utils/LinkToTop";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import InfoIcon from "@mui/icons-material/Info";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";


const pages = [
  {
    title: "My account",
    path: "#account",
    icon: () => <ManageAccountsIcon sx={{ color: '#e9ebff', fontSize: 30 }} />,
  },
  {
    title: "Cars",
    path: "#cars",
    icon: () => <DirectionsCarIcon sx={{ color: '#e9ebff', fontSize: 30 }} />,
  },
  {
    title: "About us",
    path: "#Home",
    icon: () => <InfoIcon sx={{ color: '#e9ebff',fontSize: 30 }} />,
  },
];

const Header = forwardRef((props, ref) => {
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

  const openNavBar = () => {
    setOpenNavBarMobile(!openNavBarMobile);
  };

  return (
    <>
      <AppBar
        ref={ref}
        position={props.position}
        sx={{
          backgroundColor:"#0057FF",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: 4,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "flex",
                    alignContent: "center",
                  }}
                >
                  {
                    <>
                      {page.icon()}
                      <Typography color={'#e9ebff'} variant="h5" fontWeight={"600"}>
                        {page.title}
                      </Typography>
                    </>
                  }
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { sm: "flex", md: "none", flexGrow: 1 } }}>
              <NavBarMobile
                openNavBarMobile={openNavBarMobile}
                setOpenNavBarMobile={setOpenNavBarMobile}
              />
              <button onClick={openNavBar} className={"icon-menu"} />
            </Box>
            <LinkToTop to="/">
              <button className="logo-motor-fortune"></button>
            </LinkToTop>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
});

export default Header;
