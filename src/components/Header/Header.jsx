import { useState } from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar';

 function Header(){
    
    const [openNavBarMobile,setOpenNavBarMobile] = useState(false);

    const openNavBar = () =>{
        setOpenNavBarMobile(!openNavBarMobile);
    }
    
    return(
        <>
            <NavBar openNavBarMobile = {openNavBarMobile} setOpenNavBarMobile={setOpenNavBarMobile}/>
            <header> 
                <button onClick={openNavBar} className={openNavBarMobile?"icon-close":"icon-menu"}/>
                <span className="logo-motor-fortune"></span>
            </header>
        </>
    )
}

export default Header;