import Slider from "../../components/SliderHome/Slider";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./PageHome.css";
import { Button, Container, Stack, Typography } from "@mui/material";
import { LinkToTop } from "../../utils/LinkToTop";
import HideComponentOnScroll from "../../utils/HideComponentOnScroll";
import LayoutPage from "../../utils/LayoutPage";

function PageHome() {
  return (
    <>
      <LayoutPage headerHiddenOnScroll>
        <Slider />
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "0px 12px",
          }}
        >
          <p className="title-home-page">
            we sell the <b>best cars</b>
            <br /> of the market
          </p>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            <LinkToTop to="/posts">
              <Button
                sx={{
                  height: "auto",
                  fontSize: "1.6rem",
                  padding: 0.85,
                  textAlign: "center",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#0057FF",
                  },
                }}
                size="large"
                variant="contained"
              >
                see all vehicles <br /> for sale
              </Button>
            </LinkToTop>
          </Container>
          <div className="line-fw" />
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            <span className="logo-ford"></span>
            <span className="logo-audi"></span>
            <span className="logo-bmw"></span>
            <span className="logo-mercedes-benz"></span>
            <span className="logo-jeep"></span>
          </Container>
          <div className="line-fw" />
          <Stack
            sx={{
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                height: "120px",
                fontSize: "1.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
                fontWeight: "bold",
              }}
            >
              {" "}
              About us{" "}
            </p>
            <span className="logo-mf"></span>
            <p
              style={{
                height: "120px",
                fontSize: "1.5rem",
                width: "100%",
                textAlign: "center",
                fontWeight: "500",
                marginTop: "30px",
              }}
            >
              We are Motor Fortuna, your best option for buying the best cars on
              the market since 2023.
            </p>
          </Stack>
        </Container>
      </LayoutPage>
    </>
  );
}

export default PageHome;
