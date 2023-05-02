
import { useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Post from "./components/Post/Post"
import PagePosts from "./pages/PagePosts/PagePosts"

function App() {
  const [openNavBarMobile,setOpenNavBarMobile] = useState(false);

  return (
  <>
    <Header  openNavBarMobile = {openNavBarMobile} setOpenNavBarMobile={setOpenNavBarMobile} />
    <NavBar openNavBarMobile = {openNavBarMobile} setOpenNavBarMobile={setOpenNavBarMobile}/>
    <PagePosts/>
    <Footer />
  </>
  )
  // <Home>

  // </Home>
  // <Footer>

  // // 
}

export default App
