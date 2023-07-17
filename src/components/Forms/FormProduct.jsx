import { Box, Button, MenuItem, Modal, TextField, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { fetchCategories, uploadNewProduct } from "../../api";
import { ModalUploadImgs } from "../ModalUploadImgs/ModalUploadImgs";
import axios from "axios";

export const FormProduct = () => {
  const [categories, setCategories] = useState(null);
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let categoriesFetched = await fetchCategories();
      setCategories(categoriesFetched);
    };
    getCategories();
  }, []);

  const uploadFiles = async (files) => {
    const uploadPromises = files.map(async (file) => {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", "sgcuz1jt");
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dyps30agn/upload",
        form
      );
      return data.secure_url;
    });
  
    try {
      const urls = await Promise.all(uploadPromises);
      return urls;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };

  const onSubmit = async (values, {setSubmitting}) => {
    setSubmitting(false);
    const urlsImgs = await uploadFiles(files);
    console.log("🚀 ~ file: FormProducsaasddst.jsx:41 ~ onSubmit ~ urlsImgs:", urlsImgs)
    const product = {
      name: values.nameProduct,
      description: values.description,
      characteristics: [values.km,values.year,values.color],
      imgs: urlsImgs,
      categories: [values.category]
    }
    uploadNewProduct(product);
  }

  return (
    <Formik
      initialValues={{
        nameProduct: "",
        description: "",
        category: "",
        km: "",
        year: "",
        color: "",
        imgs: [],
      }}
      onSubmit={onSubmit}
    >
      {({ getFieldProps, setFieldValue }) => (
        <Form>
          <Stack
            flexDirection={"row"}
            flexWrap={"wrap"}
            gap={'10px'}
            padding={"10px"}
            width={"100%"}
          >
            <Field
              {...getFieldProps("nameProduct")}
              as={TextField}
              type="text"
              label="Name"
              variant="filled"
              margin="normal"
              fullWidth
              sx={{
                minWidth: "105px",
                margin: 0,
              }}
              inputProps={{ sx: { fontSize: "1.9rem" } }}
              InputLabelProps={{ sx: { fontSize: "1.9rem" } }}
            />
            <Field
              {...getFieldProps("description")}
              as={TextField}
              type="text"
              margin="normal"
              label="Description"
              variant="filled"
              sx={{
                margin: 0,
              }}
              fullWidth
              inputProps={{ sx: { fontSize: "1.9rem" } }}
              InputLabelProps={{ sx: { fontSize: "1.9rem" } }}
            />
            <Field
              {...getFieldProps("color")}
              as={TextField}
              type="text"
              margin="normal"
              label="Color"
              variant="filled"
              sx={{
                flex: 1,
                minWidth: "105px",
                margin: 0,
              }}
              inputProps={{ sx: { fontSize: "1.9rem" } }}
              InputLabelProps={{ sx: { fontSize: "1.9rem" } }}
            />
            <Field
              {...getFieldProps("year")}
              as={TextField}
              type="text"
              margin="normal"
              label="Year"
              sx={{
                flex: 1,
                minWidth: "105px",
                margin: 0,
              }}
              variant="filled"
              inputProps={{ sx: { fontSize: "1.9rem" } }}
              InputLabelProps={{ sx: { fontSize: "1.9rem" } }}
            />
            <Field
              {...getFieldProps("km")}
              as={TextField}
              type="text"
              margin="normal"
              label="KM"
              sx={{
                flex: 1,
                minWidth: "105px",
                margin: 0,
              }}
              variant="filled"
              inputProps={{ sx: { fontSize: "1.9rem" } }}
              InputLabelProps={{ sx: { fontSize: "1.9rem" } }}
            />
            {categories && (
              <Field
                {...getFieldProps("category")}
                as={TextField}
                select
                margin="normal"
                name="category"
                label="Category"
                className='category'
                variant="filled"
                inputProps={{
                  sx: {
                    fontSize: "1.9rem",
                    "&.MuiSelect-select": {
                      pt: "35px",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    fontSize: "1.9rem",
                  },
                }}
                sx={{
                  margin: 0
                }}
                fullWidth
              >
                {categories.map((category, idx) => {
                  return (
                    <MenuItem key={idx} value={category._id} name={category} sx={{fontSize:'16px'}}>
                      {`${category.name}`}
                    </MenuItem>
                  );
                })}
              </Field>
            )}
          </Stack>
          <Stack flexDirection={"column-reverse"} gap={"10px"} padding={'0px 10px'}>
            <Button variant="contained" type="submit">
              Ready!
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpen(true)}
            >
              UPLOAD IMAGES
            </Button>
          </Stack>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Box>
              <ModalUploadImgs
                setOpen={setOpen}
                setFieldValue={setFieldValue}
                files={files}
                setFiles={setFiles}
              />
            </Box>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};
