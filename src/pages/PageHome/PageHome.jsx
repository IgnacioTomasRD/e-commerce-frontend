import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PageHome.css";
import { Button, Container } from "@mui/material";

function PageHome() {
  return (
    <>
      <Header />
      <Slider />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <p className="title-home-page">
          we sell the best cars
          <br /> of the market
        </p>
        <Button sx={{backgroundColor: '#0057FF'}} variant="contained">see all vehicles for sale</Button>
      </Container>
      <Footer />
    </>
  );
}

export default PageHome;
