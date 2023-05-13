import { Paper, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

function FormUserSettings() {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
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
                User Settings
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              margin="dense"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              name="password"
              sx={{
                "& .MuiInputBase-root": {
                  fontSize: "12px",
                },
                "& .MuiFormLabel-root": {
                  fontSize: "12px",
                },
              }}
              label="Password"
              margin="dense"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </form>
        </Paper>
      );
}

export default FormUserSettings