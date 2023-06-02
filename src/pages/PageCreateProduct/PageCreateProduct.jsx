import React, { useState } from "react";
import LayoutPage from "../../utils/LayoutPage";
import { Box, Button, Modal } from "@mui/material";
import { ModalUploadImgs } from "../../components/ModalUploadImgs/ModalUploadImgs";

export const PageCreateProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(true);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <LayoutPage fullHeight>
      <Button
        variant="contained"
        color="primary"
        sx={{ margin: 10 }}
        onClick={() => setOpen(true)}
      >
        UPLOAD IMAGES
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box>
          <ModalUploadImgs />
        </Box>
      </Modal>
    </LayoutPage>
  );
};
