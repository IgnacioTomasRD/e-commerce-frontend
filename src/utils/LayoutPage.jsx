import { Box, Stack } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HideComponentOnScroll from "./HideComponentOnScroll";

function LayoutPage({ children, fullHeight, headerHiddenOnScroll, position ,withoutLabels, shoppingCart }) {
  return (
    <Stack
      height={fullHeight ? "100vh" : "auto"}
      width={1}
      flexDirection={"row"}
      flexWrap={"wrap"}
      position={position ? position : "static"}
      justifyContent={"center"}
    >
      {headerHiddenOnScroll ? (
        <HideComponentOnScroll>
          <Header position="fixed" withoutLabels = {withoutLabels} shoppingCart = {shoppingCart}/>
        </HideComponentOnScroll>
      ) : (
        <Header position="static" withoutLabels = {withoutLabels} shoppingCart = {shoppingCart} />
      )}
      <Box sx = {{minHeight:'calc(100vh - 272px)',width: 1, position: 'relative'}}>{children}</Box>{" "}
      {fullHeight ? (
        <Stack width={1} alignSelf={"end"}>
          <Footer />
        </Stack>
      ) : (
        <Footer />
      )}
    </Stack>
  );
}

export default LayoutPage;
