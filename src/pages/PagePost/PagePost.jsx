import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider from "../../components/SliderPost/SliderPost";
import "./PagePost.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function PagePost(props) {
  const { product } = props;
  return (
    <>
      <Header />
      <Container sx={{ maxWidth: "850px !important" }}>
        <Stack
          justifyContent={"space-between"}
          flexDirection={"row"}
          minHeight={"70px"}

          width={1}
        >
          <Typography variant="h4" sx={{ flexGrow: 1, maxWidth:"85%", alignSelf: "end", }}>
            Mercedes Benz clase C
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#0057FF",
              borderRadius: "50%",
              marginTop: 1.5,
              minWidth: 0,
              "&:hover": {
                backgroundColor: "#0057FF",
              },
              alignSelf: "start"
            }}
          >
            <ArrowBackIosIcon
              sx={{ color: "white", fontSize: 40, paddingLeft: "11px" }}
            />
          </Button>
          
        </Stack>
        <Slider/>
        <Container sx ={{ padding: 0,marginTop: 2}}>
          <Typography variant = "h5">Price: $10000</Typography>
          <Typography variant = "h5" >Stock: 3 units</Typography>
          <Stack>
            <Typography variant = "h5">Units: 1</Typography>
          </Stack>
          <Divider></Divider>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography variant = "h5">Description</Typography>
            <ArrowDropDownIcon/>
          </Stack>
          <Divider/>
          <Stack direction={'row'} alignItems={'center'}>
            <Typography variant = "h5">Characteristics</Typography>
            <ArrowDropDownIcon/>
          </Stack>
          <Divider/>
          <Stack sx = {{marginTop:2, marginBottom: 2}}direction={'row'} justifyContent={'space-between'}>
            <Button sx={{width:'120px'}} variant= 'outlined'>ADD TO SHOPPING CART</Button>
            <Button sx={{width:'120px'}} variant= 'outlined'>BUY NOW</Button>
          </Stack>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default PagePost;
