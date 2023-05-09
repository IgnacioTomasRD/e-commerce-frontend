import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import ProductPost from "../../components/ProductPost/ProductPost";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function PageTransaction() {
  return (
    <Stack direction={"row"} flexWrap={"wrap"} width={"100vw"} height={"100vh"}>
      <Header />
      <Container sx={{ maxWidth: "788px !important"}}>
        <Typography marginTop={4} marginBottom={1} variant="h2">
          {" "}
          Your Products
        </Typography>
        <Container
          sx={{
            height: "40vh",
            overflow: "scroll",
            overflowX: "hidden",
            padding:'0px !important',
            "&::-webkit-scrollbar": {
              "-webkit-appearance": "none",
              widht:'4px'
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#ccc",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: " #b3b3b3",
              boxShadow: "0 0 2px 1px rgba(0, 0, 0, 0.2)",
            },
            "&::-webkit-scrollbar-thumb:active": {
              backgroundColor: "#999999",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#e1e1e1",
              borderRadius: "2px",
            },
            "&::-webkit-scrollbar-track:hover":
              {
                background: "#d4d4d4",
              },
              "&:-webkit-scrollbar-track:active": {
                background: "#d4d4d4"
              }
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <ProductPost
              name="BMW"
              units="3"
              price="$10000"
            ></ProductPost>
            <ProductPost
              name="BMW"
              units="3"
              price="$10000"
            ></ProductPost>
            <ProductPost
              name="BMW"
              units="3"
              price="$10000"
            ></ProductPost>
            <ProductPost
              name="BMW"
              units="3"
              price="$10000"
            ></ProductPost>
            <ProductPost
              name="BMW"
              units="3"
              price="$10000"
            ></ProductPost>
            <ProductPost
              name="BMW"
              units="3"
              price="$10000"
            ></ProductPost>
          </Container>
        </Container>
        <Divider sx={{ margin: 1 }} />
        <Typography variant="h4">Total: $50000</Typography>
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
      <Stack width={1} alignSelf={"end"}>
        <Footer />
      </Stack>
    </Stack>
  );
}

export default PageTransaction;
