import { useEffect } from "react";
import LayoutPage from "../../utils/LayoutPage";
import { useState } from "react";
import { fetchProducts } from "../../api";
import {
	Box,
  Button,
  Card,
  CardMedia,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const PageCreatePost = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  return (
    <LayoutPage>
      <Stack
        sx={{
          margin: "auto",
          width: "fit-content",
          marginTop: "70px",
          marginBottom: "20px",
					padding: '10px'
        }}
      >
        <Typography
          sx={{ width: "fit-content" }}
          textAlign={"left"}
          marginBottom={"20px"}
          variant="h2"
        >
          Select your product
        </Typography>
        <Stack
          gap={2}
          sx={{
            paddingLeft: {
              sm: "20px",
              xl: "100px",
            },
						width: '100%'
          }}
          flexDirection={"row"}
          flexWrap={"wrap"}
					justifyContent={'center'}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                minWidth: "300px",
                maxWidth: "400px",
                maxHeight: "400px",
                cursor: "pointer",
              }}
              elevation={3}
            >
              <Typography variant="h3" textAlign={"center"}>
                {product.name}
              </Typography>
              <Stack flexDirection={"row"} justifyContent={"space-evenly"}>
                {product.characteristics.map((ch, index) => (
                  <Typography variant="h5" key={ch.name + index}>
                    {" "}
                    {ch.name + ": " + ch.value}
                  </Typography>
                ))}
              </Stack>
							<Box height={'260px'}>
              <CardMedia
                component="img"
                image={product.imgs[0]}
                alt=""
								height={'100%'}
								width={'100%'}
								sx={{
									objectFit: 'contain'
								}}
              ></CardMedia>
							</Box>
            </Card>
          ))}
        </Stack>
      </Stack>
    </LayoutPage>
  );
};

export default PageCreatePost;
