import { Divider, Drawer, IconButton, styled } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function NavBarMobile({ openNavBarMobile, setOpenNavBarMobile,navLinksMobile }) {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <>
      <Drawer
        open={openNavBarMobile}
        onClose={() => setOpenNavBarMobile(!openNavBarMobile)}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 0.8,
            maxWidth: "500px",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpenNavBarMobile(false)}>
            <ChevronLeftIcon sx={{ fontSize: "40px" }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <NavListDrawer  navLinksMobile= {navLinksMobile}/>
      </Drawer>
    </>
  );
}

export default NavBarMobile;
