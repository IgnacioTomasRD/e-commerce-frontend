import {
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "../../components/SliderPost/SliderPost";
import "./PagePost.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useEffect, useState } from "react";
import LayoutPage from "../../utils/LayoutPage";
import {
  styleButtonBack,
  styleButtonShoppingCart,
  styleContainer,
  styleNameProduct,
} from "./StylesPost";
import DescriptionCollapse from "../../components/DescriptionCollapse/DescriptionCollapse";
import CharacteristicsCollapse from "../../components/CharacteristicsCollapse/CharacteristicsCollapse";

const post = {
  id: '1',
  product: {
    name: "AMG GTR 2020",
    description:
      "from 0 to 100KM/H in 3.6s, The car has up-to-date service",
    category: "SPORT",
    characteristics: [
      {
        name: "KM",
        value: 30,
      },
      {
        name: "year",
        value: "2020",
      },
    ],
    imgs: ["/src/assets/imgs/mb.jpg"],
  },
  description: "The best financing, 98 installments with compound interest",
  price: 200000,
  stock: 10,
  state: "ACTIVE",
}

function PagePost() {
  const [units, setUnits] = useState(1);
  const {product} = post;


  const ButtonShoppingCart = () => (
    <Button sx={styleButtonShoppingCart} variant="outlined">
      {" "}
      ADD TO SHOPPING CART{" "}
    </Button>
  );
  const ButtonBuyNow = () => (
    <Button
      sx={{ width: "30%", color: "#0057FF", borderColor: "#0057FF" }}
      variant="outlined"
    >
      BUY NOW
    </Button>
  );

  const Name = () => (
    <Typography variant="h4" sx={styleNameProduct}>
      {" "}
      {product?.name}{" "}
    </Typography>
  );
  const ButtonBack = () => (
    <Button variant="contained" sx={styleButtonBack}>
      <ArrowBackIosIcon
        sx={{ color: "white", fontSize: 40, paddingLeft: "11px" }}
      />
    </Button>
  );

  return (
    <>
      <LayoutPage>
        <Container sx={{ maxWidth: "850px !important" }}>
          <Container sx={styleContainer}>
            <Name />
            <ButtonBack />
          </Container>
          <Slider imgs = {product?.imgs}/>
          <Container sx={{ padding: 0, marginTop: 2 }}>
            <Typography variant="h5">Price: {post?.price}USD</Typography>
            <Typography variant="h5">Stock: {post?.stock} units</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography variant="h5">Units: {units}</Typography>
              <Button
                sx={{ margin: 0, padding:1, minWidth: 0 }}
              >
                <ControlPointIcon
                  sx={{ color: "primary.main" }}
                />
              </Button>
              <Button
                sx={{ margin: 0, padding:1, minWidth: 0 }}
              >
                <RemoveCircleOutlineIcon sx={{ color: "primary.main" }} />
              </Button>
            </Stack>
            <Divider></Divider>
            <DescriptionCollapse description={product?.description} />
            <Divider />
            <CharacteristicsCollapse
              characteristics={product?.characteristics}
            />
            <Stack
              sx={{ marginTop: 2, marginBottom: 5 }}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <ButtonShoppingCart />
              <ButtonBuyNow />
            </Stack>
          </Container>
        </Container>
      </LayoutPage>
    </>
  );
}

export default PagePost;
