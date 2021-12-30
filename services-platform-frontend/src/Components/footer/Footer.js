import AppLogo from "../../images/app-logo-2.png";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="app-logo">
          <img src={AppLogo} width="100%" height="100%" />
        </div>
        <div className="footer-text">
          <h5>
            Relax, get your tasks done & enjoy your time to do what you love.
          </h5>
        </div>
        <div className="footer-icons">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-whatsapp"></i>
          <i class="bi bi-facebook"></i>
        </div>
      </div>
      <div className="footer">
        <h6 className="rights">All rights reserved © Hndler 2022</h6>
      </div>
    </>
  );
}

export default Footer;
