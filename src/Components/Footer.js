import React from "react";

const Footer = () => {
  return (
      <>
      <div id="footerDiv">
      <div className="footer">
      <div className="footerLogo">
        <img
          src="https://klbtheme.com/machic/wp-content/uploads/2021/08/logo-dark.png"
          alt=""
        />
      </div>
      <div className="icon">
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-linkedin-in"></i>
      </div>
    </div>
    <hr />
    <div className="copyright">
        <p>Copyright 2022 © Machic. All right reserved</p>
    </div>
    </div>
    </>
  );
};

export default Footer;
