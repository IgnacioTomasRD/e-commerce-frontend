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

function ProductPost({ name, units, cross, price }) {
  return (
    <>
      <Card
        sx={{ maxHeight: "600px", height: "auto", position: "relative" }}
        raised
      >
        <CardActionArea>
          <Stack direction={{xs:"column",sm:"row"}}>
            <CardMedia
              component="img"
              image="src/assets/imgs/mb.jpg"
              alt="Car on sale"
              sx={{
                width: {xs:"100%",sm:"0.6"},
                flexGrow: 1,
              }}
            />
            <CardContent
              sx={{
                width: {xs:"100%",sm:"0.4"},
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 0,
              }}
            >
              <Stack>
                {cross ? (
                  <CancelIcon
                    sx={{
                      fontSize: "20px",
                      position: "absolute",
                      right: "0px",
                      top: "0px",
                      margin: "5px",
                    }}
                  ></CancelIcon>
                ) : null}
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{ margin: 0 }}
                  textAlign="center"
                >
                  {name}
                </Typography>
                {price ? (
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ margin: 0 }}
                    textAlign="center"
                  >
                    Price: {price}
                  </Typography>
                ) : null}
                {units ? (
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ margin: 0 }}
                    textAlign="center"
                  >
                    Units: {units}
                  </Typography>
                ) : null}
              </Stack>
            </CardContent>
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
}

export default ProductPost;
