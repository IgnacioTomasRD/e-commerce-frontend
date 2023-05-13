import "./Footer.css";
import { LinkToTop } from "../../utils/LinkToTop";

function Footer() {
  return (
    <footer className="container-footer">
      <section className="container-footer--info">
        <div className="container-footer--info_logo">
          <LinkToTop to="/">
            <div className="container-footer--info__logo_MF"></div>
          </LinkToTop>
        </div>
        <article className="container-footer--info__visit-us">
          <h2>visit us:</h2>
          <div className="container-icons">
            <LinkToTop >
              <div className="logo-twitter" />
            </LinkToTop>
            <LinkToTop >
              <div className="logo-facebook" />
            </LinkToTop>
            <LinkToTop >
              <div className="logo-instagram" />
            </LinkToTop>
          </div>
        </article>
      </section>
      <div className="line-footer" />
      <section className="container-footer--copyright">
        <div className="copyright-logo" />
        <p className="container-footer--copyright__name">Motor Fortuna Group</p>
      </section>
    </footer>
  );
}

export default Footer;
