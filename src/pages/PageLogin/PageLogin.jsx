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
        <Typography variant="h3" sx={{ marginBottom: "10px" }}>
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
                '& .MuiInputBase-root':{
                    fontSize:'12px'
                }
            }}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            sx={{
                '& .MuiInputBase-root':{
                    fontSize:'12px'
                }
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
            sx={{ marginTop: "10px" }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            LOG IN
          </Button>
        </form>
      </Paper>
      <Stack width={1} alignSelf={"end"}>
        <Footer />
      </Stack>
    </Stack>
  );
}

export default PageLogin;
