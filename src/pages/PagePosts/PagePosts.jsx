import {
  Badge,
  Button,
  Container,
  Divider,
  Drawer,
  Stack,
} from "@mui/material";
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ProductsListPost from "../../components/ProductsListPost/ProductsListPost";
import Searcher from "../../components/Searcher/Seacher";
import "./PagePosts.css";
import { useEffect, useState } from "react";
import ProductPost from "../../components/ProductPost/ProductPost";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function PagePosts() {
  const [isOpenShopCart, setOpenShopCart] = useState(false);

  return (
    <>
      <Header position="static" />
      <main className="container-models">
        <h2 className="container-models_title">Models</h2>
        <Searcher />
        <Filter />
        <div className="separador" />
        <ProductsListPost />
        <Button
          onClick={() => setOpenShopCart(true)}
          sx={{
            borderRadius: "50%",
            position: "sticky",
            marginBottom: "10px",
          }}
          className="shopping-cart"
        ></Button>
      </main>
      <Drawer
        anchor={"right"}
        open={isOpenShopCart}
        sx={{
          "& .MuiDrawer-paper": { width: 1, maxWidth: "600px" },
        }}
        onClose={() => setOpenShopCart(false)}
      >
        <Container>
          <Button sx={{ borderRadius: "50%" }}>
            <ChevronRightIcon
              sx={{ fontSize: "50px", color: "black" }}
              onClick={() => setOpenShopCart(false)}
            ></ChevronRightIcon>
          </Button>
          <Stack spacing={2}>
            <ProductPost
              cross
              name="BMW"
              units="3 units"
              price="$10000"
            ></ProductPost>
          </Stack>
          <Stack direction={"row"} sx={{ marginTop: 2 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0057FF",
                width: 0.5,
                minWidth: 0,
                "&:hover": {
                  backgroundColor: "#0057FF",
                },
                margin: "auto",
                marginBottom: "15px",
              }}
            >
              Buy
            </Button>
          </Stack>
        </Container>
      </Drawer>
      <Footer />
    </>
  );
}

export default PagePosts;
