import { useState } from "react";
import "./Header.css";
import NavBarMobile from "../NavBar/NavBarMobile";
import { LinkToTop } from "../../utils/LinkToTop";
import LoginIcon from "@mui/icons-material/Login";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigateToTop } from "../../hooks/useNavigateToTop";
import { logout } from "../../api";
import { setLogout } from "../../reducer/userSlice";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { setOpen } from "../../reducer/shoppingCartSlice";

const Header = forwardRef((props, ref) => {
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  const user = useSelector((state) => state.user);
  const shoppingCart = useSelector(state => state.shoppingCart)
  const navigateTo = useNavigateToTop();
  const dispatch = useDispatch();

  const labelAccount = {
    title: "My account",
    icon: () => <ManageAccountsIcon sx={{ color: "#e9ebff", fontSize: 30 }} />,
    onClick: () => navigateTo("#"),
  };
  const labelLogIn = {
    title: "Login",
    onClick: () => navigateTo("/login"),
    icon: () => <LoginIcon sx={{ color: "#e9ebff", fontSize: 30 }} />,
  };
  const labelLogOut = {
    title: "Log out",
    icon: () => <LogoutIcon sx={{ color: "#e9ebff", fontSize: 30 }} />,
    onClick: async () => {
      await logout();
      dispatch(setLogout());
    },
  };
  const labelSignUp = {
    title: "Sign Up",
    onClick: () => navigateTo("/register"),
    icon: () => <HowToRegIcon sx={{ color: "#e9ebff", fontSize: 30 }} />,
  };

  const openNavBar = () => {
    setOpenNavBarMobile(!openNavBarMobile);
  };

  const labels = props.withoutLabels
    ? []
    : user.isLogin
    ? [labelAccount, labelLogOut]
    : [labelLogIn, labelSignUp];

  return (
    <>
      <AppBar
        ref={ref}
        position={props.position}
        sx={{
          backgroundColor: "#0057FF",
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
              {labels.map((label) => (
                <Button
                  key={label.title}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "flex",
                    alignContent: "center",
                  }}
                  onClick={label.onClick}
                >
                  {
                    <>
                      {label.icon()}
                      <Typography
                        color={"#e9ebff"}
                        variant="h5"
                        fontWeight={"600"}
                      >
                        {label.title}
                      </Typography>
                    </>
                  }
                </Button>
              ))}
            </Box>
            {props.shoppingCart && <Button
              sx={{
                display:{xs:'none',md:'flex'},
                mr: 5,
                width: "250px",
                borderRadius: "5px",
                border: "1px solid white",
              }}
              onClick={() => dispatch(setOpen(!shoppingCart.isOpen))}
              endIcon={<ShoppingCartCheckoutIcon sx={{color:'white'}}/>}
            >
              <Typography
                variant="h5"
                textAlign={"start"}
                sx={{
                  width: "210px",
                  padding: 1,
                  color: "primary.contrastText",
                }}
              >
                Shopping Cart
              </Typography>
            </Button>}
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
