import {BrowserRouter,Route,Routes} from 'react-router-dom';
import PagePosts from "./pages/PagePosts/PagePosts"
import PageHome from './pages/PageHome/PageHome';
import PagePost from './pages/PagePost/PagePost';

function App() {
  

  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route path= "/posts" element={<PagePosts/>} />
            <Route path= "/" element={<PageHome/>} />
            <Route path= "/post" element={<PagePost/>} />
        </Routes>
    </BrowserRouter>

  </>
  )
}

export default App
