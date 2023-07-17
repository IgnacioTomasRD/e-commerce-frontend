import React, { useState } from "react";
import LayoutPage from "../../utils/LayoutPage";
import { Box, Button, Modal, Paper, Stack, Typography } from "@mui/material";
import { ModalUploadImgs } from "../../components/ModalUploadImgs/ModalUploadImgs";
import { FormProduct } from "../../components/Forms/FormProduct";

export const PageCreateProduct = () => {

  return (
    <LayoutPage withoutLabels>
      <Stack width={1} height={1} justifyContent={'center'}>
        <Paper
          elevation={6}
          sx={{
            padding: 3,
            width: 0.5,
            minWidth: '300px',
            margin: "auto",
            marginTop: "10px",
            marginBottom: "10px",
            height: 'auto'
          }}
        >
          <Typography sx={{fontSize: '2.4rem'}}>Create new product</Typography>
          <FormProduct />
        </Paper>
      </Stack>
    </LayoutPage>
  );
};
