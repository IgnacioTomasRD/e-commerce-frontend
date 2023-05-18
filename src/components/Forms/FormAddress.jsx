import { Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

const FormAddress = () => {
  const formik = useFormik({
    initialValues: {
      street: "",
      city: "",
      postalCode: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Paper
      elevation={10}
      sx={{
        maxWidth: "450px !important",
        padding: "25px",
        margin: "auto",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography variant = 'h4'>
           Address
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          id="street"
          name="street"
          margin="dense"
          label="Street"
          value={formik.values.street}
          onChange={formik.handleChange}
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={formik.touched.street && formik.errors.street}
          sx={{
            "& .MuiInputBase-root": {
              fontSize: "1.2rem",
            },
            "& .MuiFormLabel-root": {
              fontSize: "1.2rem",
            },
          }}
        />
        <TextField
          fullWidth
          id="city"
          name="city"
          sx={{
            marginTop:2,
            "& .MuiInputBase-root": {
              fontSize: "12px",
            },
            "& .MuiFormLabel-root": {
              fontSize: "12px",
            },
          }}
          label="City"
          margin="dense"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          fullWidth
          id="postalCode"
          name="postalCode"
          sx={{
            marginTop:2,
            "& .MuiInputBase-root": {
              fontSize: "12px",
            },
            "& .MuiFormLabel-root": {
              fontSize: "12px",
            },
          }}
          label="Postal code"
          margin="dense"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
          helperText={formik.touched.postalCode && formik.errors.postalCode}
        />
      </form>
    </Paper>
  );
};

export default FormAddress;
