import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import "./ProductPost.css";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  propsTypography,
  styleCard,
  styleCardContent,
  styleCrossIcon,
  styleMediaCard,
} from "./stylesProductPost";

function ProductPost({
  name,
  units,
  cross,
  year,
  km,
  price,
  img,
  handleClick,
}) {
  const NamePost = () => <Typography {...propsTypography}>{name}</Typography>;
  const Price = () => (
    <Typography {...propsTypography} variant="h5">
      {" "}
      Price: {price} USD{" "}
    </Typography>
  );
  const Units = () => (
    <Typography {...propsTypography} variant = 'h6'> Units: {units} </Typography>
  );
  const YearAndKM = () => (
    <Typography {...propsTypography} variant="h6">
      {" "}
      {year} | {km} KM{" "}
    </Typography>
  );

  return (
    <Card sx={styleCard} raised elevation={3} onClick={handleClick}>
      <CardActionArea sx={{ maxHeight: { xs: "400px", sm: "300px" } }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ maxHeight: { xs: "400px", sm: "300px" } }}
        >
          <CardMedia
            component="img"
            image={img}
            alt="Car on sale"
            sx={styleMediaCard}
          />
          <CardContent sx={styleCardContent}>
            <Stack>
              {cross && <CancelIcon sx={styleCrossIcon}></CancelIcon>}
              <NamePost />
              {price && <Price />}
              {units && <Units />}
              {km != undefined && year != undefined && <YearAndKM />}
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default ProductPost;
