import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagePosts from "./pages/PagePosts/PagePosts";
import PageHome from "./pages/PageHome/PageHome";
import PagePost from "./pages/PagePost/PagePost";
import PageTransaction from "./pages/PageTransaction/PageTransaction";
import PageLogin from "./pages/PageLogin/PageLogin";
import PageRegister from "./pages/PageRegister/PageRegister";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<PageHome />} />
              <Route path="posts" element={<PagePosts />} />
              <Route path="posts/:id" element={<PagePost />} />
              <Route path="transaction" element={<PageTransaction />} />
              <Route path="login" element={<PageLogin />} />
              <Route path="register" element={<PageRegister />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

// Cambiar color de footer y header para mas contraste
// crear layout para el header y el footer
// temas dark y light
// eslint

