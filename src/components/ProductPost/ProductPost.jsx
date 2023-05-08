import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import "./ProductPost.css";

function ProductPost({ name }) {
  return (
    <>
      <Card sx = {{maxHeight: '400px', height: 'auto'}} raised>
        <CardActionArea>
          <Stack
            direction= 'row'
          >
            <CardMedia
              component="img"
              image="src/assets/imgs/bmw.png"
              alt="Car on sale"
              sx={{
                width:"60%",
                
              }}
            />
            <CardContent sx = {{width: '40%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Typography gutterBottom variant="h4" component="div" sx = {{margin: 0}} textAlign='center'>
                {name}
              </Typography>
            </CardContent>
          </Stack>
        </CardActionArea>
      </Card>
    </>
  );
}

export default ProductPost;
