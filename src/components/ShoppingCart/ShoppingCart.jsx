import { Button, Container, Drawer, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductPost from "../ProductPost/ProductPost";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../../reducer/shoppingCartSlice";
import { useNavigateToTop } from "../../hooks/useNavigateToTop";

const ShoppingCart = () => {
  const isOpenShopCart = useSelector(state => state.shoppingCart).isOpen;
  const dispatch = useDispatch();
  const navigateTo = useNavigateToTop();
  const items = useSelector((state) => state.shoppingCart).items;

  return (
    <>
      <Button
        onClick={() => dispatch(setOpen(true))}
        sx={{
          borderRadius: "50%",
          position: "sticky",
          marginBottom: "10px",
          display:{xs:'flex',md:'none'}
        }}
        className="shopping-cart"
      ></Button>
      <Drawer
        anchor={"right"}
        open={isOpenShopCart}
        sx={{
          "& .MuiDrawer-paper": { width: 1, maxWidth: "600px" },
        }}
        onClose={() => dispatch(setOpen(false))}
      >
        <Container>
          <Button sx={{ borderRadius: "50%" }}>
            <ChevronRightIcon
              sx={{ fontSize: "50px", color: "black" }}
              onClick={() => dispatch(setOpen(false))}
            ></ChevronRightIcon>
          </Button>
          <Stack spacing={2}>
            {items.map((item, index) => {
              return (
                <ProductPost
                  key={index}
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
            {items.length > 0 ? (
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
                onClick={() => navigateTo('/transaction')}
              >
                Buy
              </Button>
            ) : (
              <Typography variant="h4" textAlign={"center"} width={1}>
                {" "}
                Your shopping cart is empty!{" "} <br/>
                Add cars!
              </Typography>
            )}
          </Stack>
        </Container>
      </Drawer>
    </>
  );
};

export default ShoppingCart;
