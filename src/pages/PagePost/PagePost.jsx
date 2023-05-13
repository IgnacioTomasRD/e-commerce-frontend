import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Slider from "../../components/SliderPost/SliderPost";
import "./PagePost.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useState } from "react";

function PagePost(props) {
  const { product } = props;
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isCharacteristicsOpen, setCharacteristicsOpen] = useState(false);

  return (
    <>
      <Header position = 'static'/>
      <Container sx={{ maxWidth: "850px !important" }}>
        <Container
          sx={{
            display: "flex",
            width: 1,
            justifyContent: "space-between",
            minHeight: "70px",
            marginBottom: "10px"
          }}
        >
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, maxWidth: "85%", alignSelf: "end", fontSize: '2rem' }}
          >
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
              alignSelf: "start",
            }}
          >
            <ArrowBackIosIcon
              sx={{ color: "white", fontSize: 40, paddingLeft: "11px" }}
            />
          </Button>
        </Container>
        <Slider />
        <Container sx={{ padding: 0, marginTop: 2 }}>
          <Typography variant="h5">Price: $10000</Typography>
          <Typography variant="h5">Stock: 3 units</Typography>
          <Stack>
            <Typography variant="h5">Units: 1</Typography>
          </Stack>
          <Divider></Divider>
          <Stack
            sx={{ backgroundColor: "transparent", border: 0 }}
            direction={"row"}
            alignItems={"center"}
            component={"button"}
            onClick={() => setDescriptionOpen(!isDescriptionOpen)}
          >
            <Typography variant="h5">Description</Typography>
            {isDescriptionOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </Stack>
          <Collapse in={isDescriptionOpen}>
            <Container>
              <Typography variant="h6">Its a Nice Car!!</Typography>
            </Container>
          </Collapse>
          <Divider />
          <Stack
            sx={{ backgroundColor: "transparent", border: 0 }}
            component={"button"}
            direction={"row"}
            alignItems={"center"}
            onClick={() => setCharacteristicsOpen(!isCharacteristicsOpen)}
          >
            <Typography variant="h5">Characteristics</Typography>
            {isCharacteristicsOpen ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
          </Stack>
          <Collapse in={isCharacteristicsOpen}>
            <Container sx={{ margin: "auto" }}>
              <Grid container width={1} textAlign={"center"}>
                <Grid
                  item
                  xs
                  sx={{
                    borderRight: "1px solid gray",
                    borderBottom: "1px solid gray",
                  }}
                >
                  <Typography variant="h6">ABS</Typography>
                </Grid>
                <Grid item xs sx={{ borderBottom: "1px solid gray" }}>
                  <Typography variant="h6">Yes</Typography>
                </Grid>
              </Grid>
              <Grid container width={1} textAlign={"center"}>
                <Grid
                  item
                  xs
                  sx={{
                    borderRight: "1px solid gray",
                    borderBottom: "1px solid gray",
                  }}
                >
                  <Typography variant="h6">Airbag</Typography>
                </Grid>
                <Grid item xs sx={{ borderBottom: "1px solid gray" }}>
                  <Typography variant="h6">No</Typography>
                </Grid>
              </Grid>
              <Grid container width={1} textAlign={"center"}>
                <Grid item xs sx={{ borderRight: "1px solid gray" }}>
                  <Typography variant="h6">KM</Typography>
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">105054KM</Typography>
                </Grid>
              </Grid>
            </Container>
          </Collapse>
          <Stack
            sx={{ marginTop: 2, marginBottom: 5 }}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Button
              sx={{ width: "60%", maxWidth: '200px', color: "#0057FF", borderColor: "#0057FF" }}
              variant="outlined"
            >
              ADD TO SHOPPING CART
            </Button>
            <Button
              sx={{ width: "30%", color: "#0057FF", borderColor: "#0057FF" }}
              variant="outlined"
            >
              BUY NOW
            </Button>
          </Stack>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default PagePost;
