import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Post from "./components/Post/Post"
import PagePosts from "./pages/PagePosts/PagePosts"

function App() {
  

  return (
  <>
    {/* <Header  openNavBarMobile = {openNavBarMobile} setOpenNavBarMobile={setOpenNavBarMobile} />
    
    <PagePosts/>
     <Home/> 
    <Footer /> */}
    <BrowserRouter>
        <Routes>
            <Route path= "/posts" element={<PagePosts/>} />
        </Routes>
    </BrowserRouter>

  </>
  )

  // </Home>
  // <Footer>

  // // 
}

export default App
