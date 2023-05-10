import { Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

function FormBasicInformation() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Paper
      elevation={10}
      sx={{
        top: "180px",
        maxWidth: "450px !important",
        padding: "25px",
        margin: "auto",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Typography variant = 'h4'>
          Basic information
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          id="firstName"
          name="firstName"
          margin="dense"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
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
          id="lastName"
          name="lastName"
          sx={{
            "& .MuiInputBase-root": {
              fontSize: "12px",
            },
            "& .MuiFormLabel-root": {
              fontSize: "12px",
            },
          }}
          label="Last Name"
          type="text"
          margin="dense"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
      </form>
    </Paper>
  );
}

export default FormBasicInformation;
