import "./Footer.css"

function Footer(){
    return(
        <footer className = "container-footer">
            <section className = "container-footer--info">
                <div className = "container-footer--info__logo"></div>
                <article className = "container-footer--info__visit-us"><h2>visit us:</h2> 
                <div className="container-icons">
                    <div className="logo-twitter"/>
                    <div className="logo-facebook"/>
                    <div className="logo-instagram"/>
                </div>
                </article>
            </section>
            <div className = "line"/>
            <section className="container-footer--copyright"> 
                <p className="container-footer--copyright__name"><span className="copyright-logo"/></p>
            </section>
        </footer>
    )
}

export default Footer;