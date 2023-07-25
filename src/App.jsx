import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagePosts from "./pages/PagePosts/PagePosts";
import PageHome from "./pages/PageHome/PageHome";
import PagePost from "./pages/PagePost/PagePost";
import PageTransaction from "./pages/PageTransaction/PageTransaction";
import PageLogin from "./pages/PageLogin/PageLogin";
import PageRegister from "./pages/PageRegister/PageRegister";
import { useDispatch } from "react-redux";
import { setLogin } from "./reducer/userSlice";
import { PageCreateProduct } from "./pages/PageCreateProduct/PageCreateProduct";
import PageCreatePost from './pages/PageCreatePost/PageCreatePost';

function App({user}) {
  const dispatch = useDispatch();
  if(user.isValidToken){
    dispatch(setLogin(user));
  }

  return (
    <>
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
            <Route path="admin/">
              <Route path = 'create-product' element={<PageCreateProduct/>}/>
              <Route path = 'create-post' element={<PageCreatePost/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

// Cambiar color de footer y header para mas contraste
// crear layout para el header y el footer
// temas dark y light

