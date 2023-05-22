import { Button, Container, Drawer, Stack } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductPost from "../ProductPost/ProductPost";
import { useState } from "react";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const [isOpenShopCart, setOpenShopCart] = useState(false);
  const items = useSelector((state) => state.shoppingCart).items;

  return (
    <>
      <Button
        onClick={() => setOpenShopCart(true)}
        sx={{
          borderRadius: "50%",
          position: "sticky",
          marginBottom: "10px",
        }}
        className="shopping-cart"
      ></Button>
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
            {items.map((item, index) => {
              return (
                <ProductPost
                  key ={index}
                  cross
                  name={item.post.name}
                  units={item.units}
                  price={item.post.price}
                  img={item.post.product.imgs[0]}
                ></ProductPost>
              );
            })}
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
    </>
  );
};

export default ShoppingCart;
