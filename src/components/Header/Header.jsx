import './Header.css'

 function Header({openNavBarMobile,setOpenNavBarMobile}){
    
    const openNavBar = () =>{
        setOpenNavBarMobile(!openNavBarMobile);
    }
    
    return(
        <>
            <header> 
                <button onClick={openNavBar} className={openNavBarMobile?"icon-close":"icon-menu"}/>
                <span className="logo-motor-fortune"></span>
            </header>
        </>
    )
}

export default Header;