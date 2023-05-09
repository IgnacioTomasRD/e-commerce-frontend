import {BrowserRouter,Route,Routes} from 'react-router-dom';
import PagePosts from "./pages/PagePosts/PagePosts"
import PageHome from './pages/PageHome/PageHome';
import PagePost from './pages/PagePost/PagePost';
import PageTransaction from './pages/PageTransaction/PageTransaction';
import PageLogin from './pages/PageLogin/PageLogin';

function App() {
  

  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route path= "/posts" element={<PagePosts/>} />
            <Route path= "/" element={<PageHome/>} />
            <Route path= "/post" element={<PagePost/>} />
            <Route path= "/transaction" element={<PageTransaction/>} />
            <Route path= "/login" element={<PageLogin/>} />
        </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
