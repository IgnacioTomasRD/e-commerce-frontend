import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const ModalUploadImgs = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true,accept:'images/*' });


  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    console.log("🚀 ~ file: ModalUploadImgs.jsx:21 ~ onDrop ~ files:", files);
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h2" component="h2">
        Upload or drop images
      </Typography>
      <div
        {...getRootProps()}
        className={`drop-zone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Suelta los archivos aquí...</p>
        ) : (
          <p>
            Arrastra y suelta los archivos aquí, o haz clic para seleccionarlos
          </p>
        )}
      </div>
      <Stack
        flexDirection={"row-reverse"}
        justifyContent={"space-between"}
        marginTop={2}
        padding={2}
      >
        <Button variant="contained">UPLOAD</Button>
        <Button variant="outlined">CLOSE</Button>
      </Stack>
    </Box>
  );
};
