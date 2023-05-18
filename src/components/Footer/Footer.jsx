import "./Footer.css";
import { LinkToTop } from "../../utils/LinkToTop";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

const iconStyle={
  color: '#e9ebff',
  width: '50px',
  height: '50px',
}


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
              <TwitterIcon sx={iconStyle}></TwitterIcon>
            </LinkToTop>
            <LinkToTop >
              <FacebookIcon sx = {iconStyle}></FacebookIcon>
            </LinkToTop>
            <LinkToTop >
              <InstagramIcon sx = {iconStyle}></InstagramIcon>
            </LinkToTop>
          </div>
        </article>
      </section>
      <div className="line-footer" />
      <section className="container-footer--copyright">
        <CopyrightIcon sx = {{...iconStyle,width: '20px',height:'20px'}}></CopyrightIcon>
        <p className="container-footer--copyright__name">Motor Fortuna Group</p>
      </section>
    </footer>
  );
}

export default Footer;
