import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import ProductPost from "../../components/ProductPost/ProductPost";
import LayoutPage from "../../utils/LayoutPage";
import { styleContainerPosts } from "./StylesTransaction";
import { useSelector } from "react-redux";

function PageTransaction() {
  const items = useSelector((state) => state.shoppingCart).items;

  console.log(
    "🚀 ~ file: PageTransaction.jsx:9 ~ PageTransaction ~ items:",
    items
  );

  return (
    <LayoutPage fullHeight>
      <Container sx={{ maxWidth: "788px !important" }}>
        <Typography marginTop={4} marginBottom={1} variant="h2">
          {" "}
          Your Products
        </Typography>
        <Container sx={styleContainerPosts}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {items.map((item) => {
              return (
                <ProductPost
                  name={item.post.name}
                  units={item.units}
                  price={item.post.price}
                  img={item.post.product.imgs[0]}
                />
              );
            })}
          </Container>
        </Container>
        <Divider sx={{ margin: 1 }} />
        <Typography variant="h4">
          Total:{" "}
          {items
            .map((item) => item.post.price * item.units)
            .reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              0
            )}USD
        </Typography>
        <Typography variant="h4">Transaction status: pending</Typography>
        <Stack direction={"row"} sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#0057FF",
              width: 0.5,
              minWidth: 0,
              fontSize: 15,
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
    </LayoutPage>
  );
}

export default PageTransaction;
