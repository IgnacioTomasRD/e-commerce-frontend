import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from 'yup';
import { LinkToTop } from "../../utils/LinkToTop";
import LayoutPage from "../../utils/LayoutPage";
import { styleButtonLogin, styleContainer, styleInput } from "./StyleLogin";
import { login } from "../../api";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

function PageLogin() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ file: PageLogin.jsx:38 ~ PageLogin ~ values:", values)
      login(values.email,values.password);
    },
  });

  return (
    <LayoutPage fullHeight position="relative">
    <Stack sx = {styleContainer}>
      <Paper
        elevation={7}
        sx={{
          top: "25%",
          margin: 3,
          maxWidth: "450px !important",
          padding: "25px",
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
            sx={styleInput}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            sx={styleInput}
            label="Password"
            type="password"
            margin="dense"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            sx={styleButtonLogin}
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
        <Stack sx={{ marginTop: "10px" }}>
          <Button
            variant="outlined"
            sx={{ margin: "auto", color: "#0057FF", fontSize: "1.1rem" }}
          >
            <LinkToTop to="/register">SIGN UP</LinkToTop>
          </Button>
        </Stack>
      </Paper>
      </Stack>
    </LayoutPage>
  );
}

export default PageLogin;
