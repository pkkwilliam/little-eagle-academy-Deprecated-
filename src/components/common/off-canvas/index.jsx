import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@assets/img/logo/logo.svg";
import MobileMenus from "./mobile-menus";

const OffCanvasMain = ({ isOffCanvasOpen, setIsOffCanvasOpen }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className={`offcanvas__area ${isOffCanvasOpen ? "offcanvas-opened" : ""}`}>
        <div className="offcanvas__bg"></div>
        <div className="offcanvas__wrapper">
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/">
                  <Image src={logo} style={{ width: "100%", height: "100%" }} alt="img not found" />
                </Link>
              </div>
              <div className="offcanvas__close">
                <button className="offcanvas__close-btn" type="button" onClick={() => setIsOffCanvasOpen(false)}>
                  <i className="fa-thin fa-times"></i>
                </button>
              </div>
            </div>
            <div className="offcanvas__search mb-40">
              <form onSubmit={handleSubmit}>
                <button type="submit"><i className="flaticon-search"></i></button>
                <input type="text" placeholder="Search here" />
              </form>
            </div>
            <div className="mobile-menu fix mb-30 menu-counter d-lg-none mean-container">
              <div className="mean-bar">
                <MobileMenus />
              </div>
            </div>
            <div className="offcanvas__about d-none d-lg-block mb-30">
              <h4>About Kindedo</h4>
              <p>With the help of teachers and environment as the third teacher, students
                have opportunities to confidently take risks.</p>
            </div>
            <div className="offcanvas__contact mb-30">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a target="_blank" rel="noreferrer"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">
                      <i className="fal fa-map-marker-alt"></i></a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a target="_blank" rel="noreferrer"
                      href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">12/A,
                      Mirnada City Tower, NYC</a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a href="tel:+088889797697"><i className="far fa-phone"></i></a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="tel:+088889797697">088889797697</a>
                  </div>
                </li>
                <li className="d-flex align-items-center gap-2">
                  <div className="offcanvas__contact-icon">
                    <a href="mailto:support@gmail.com"><i className="fal fa-envelope"></i></a>
                  </div>
                  <div className="offcanvas__contact-text">
                    <a href="mailto:support@gmail.com">support@mail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="offcanvas__social">
              <ul>
                <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${isOffCanvasOpen ? "opened" : ""}`} onClick={() => setIsOffCanvasOpen(false)}></div>
    </React.Fragment>
  );
};

export default OffCanvasMain;
