import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
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
const readers = [];

export const ModalUploadImgs = ({
  setOpen,
  setFieldValue,
  setFiles,
  files,
}) => {
  const [filesPreview, setFilesPreview] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: true,
    type: "file",
  });

  useEffect(() => {
    for (let i = 0; i < files.length; i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        setFilesPreview((prevFiles) => [...prevFiles, reader.result]);
      };
      readers.push(reader)
    }
    return () => {
      setFilesPreview([]);
      filesPreview.forEach((file) => URL.revokeObjectURL(filesPreview.preview));
      readers.forEach(r => r.abort())
    };
  }, [files]);

  useEffect(() =>{
    return ()=>{
      setFilesPreview([]);
      filesPreview.forEach((file) => URL.revokeObjectURL(filesPreview.preview));
    }
  },[])

  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h2" component="h2">
        Upload or drop images
      </Typography>
      <div
        {...getRootProps()}
        style={{
          width: "100%",
          height: "250px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} accept="image/*" type="file" />
        {isDragActive ? (
          <p>Suelta los archivos aquí...</p>
        ) : (
          <p>
            Arrastra y suelta los archivos aquí, o haz clic para seleccionarlos
          </p>
        )}
      </div>
      <Box width={1} minHeight={"120px"} padding={"20px"}>
        <Stack
          width={1}
          flexDirection={"row"}
          gap={3}
          flexWrap={"wrap"}
          height={"auto"}
        >
          {filesPreview.map((filePreview, index) => (
            <img
              key={index}
              src={filePreview}
              style={{ width: "80px", height: "100px", objectFit: "cover" }}
            />
          ))}
        </Stack>
      </Box>
      <Stack flexDirection={"row-reverse"} justifyContent={"space-between"}>
        <Button
          variant="contained"
          onClick={() => {
            setFilesPreview([]);
            setFieldValue("imgs", files);
            setOpen(false);
          }}
        >
          UPLOAD
        </Button>
        <Button variant="outlined" onClick={() => setOpen(false)}>
          CLOSE
        </Button>
      </Stack>
    </Box>
  );
};
