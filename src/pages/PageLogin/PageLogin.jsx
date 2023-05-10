import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function PageLogin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Stack
      position={"relative"}
      width={1}
      direction={"row"}
      height={"100vh"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      <Header />
      <Paper
        elevation={10}
        sx={{
          position: "absolute",
          top: "180px",
          maxWidth: "450px !important",
          padding: "25px",
          margin: "15px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Sign in
        </Typography>
        <form onSubmit={formik.handleSubmit}>
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
            id="password"
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
            type="password"
            margin="dense"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            sx={{ backgroundColor:"#0057FF",marginTop: "10px", fontSize: '1rem' }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            LOG IN
          </Button>
        </form>
        <Typography
          variant="h4"
          sx={{ marginTop: "15px", textAlign: "center", fontWeight: "bold" }}
        >
          Dont you have an account?
        </Typography>
        <Stack sx ={{marginTop:'10px'}}>
          <Button variant="outlined" sx={{ margin: "auto", color: "#0057FF",fontSize:'1.1rem' }}>
            SIGN UP
          </Button>
        </Stack>
      </Paper>
      <Stack width={1} alignSelf={"end"}>
        <Footer />
      </Stack>
    </Stack>
  );
}

export default PageLogin;
