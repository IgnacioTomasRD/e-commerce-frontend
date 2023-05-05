import { useState } from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';

 function Header(){
    let navigate = useNavigate();

    const [openNavBarMobile,setOpenNavBarMobile] = useState(false);

    const openNavBar = () =>{
        setOpenNavBarMobile(!openNavBarMobile);
    }

    const redirectHome = ()=>{
        navigate("/");
    }
    
    return(
        <>
            <NavBar openNavBarMobile = {openNavBarMobile} setOpenNavBarMobile={setOpenNavBarMobile}/>
            <header> 
                <button onClick={openNavBar} className={openNavBarMobile?"icon-close":"icon-menu"}/>
                <button onClick={redirectHome} className="logo-motor-fortune"></button>
            </header>
        </>
    )
}

export default Header;