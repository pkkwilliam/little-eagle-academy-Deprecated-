import React from "react";
import Image from "next/image";
import Link from "next/link";
import CopyrightText from "./component/copyright-text";
import logo from "@assets/img/logo/logo_combine.png";
import { useSelector } from "react-redux";
// internal

const Footer = () => {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.component?.footer ?? {
    contactInfo: {},
    program_links: { programs: [] },
    quick_links: { menus: [] },
    social_icons: [],
  };
  return (
    <>
      <footer>
        <div className="bd-footer-area pt-200">
          <div className="bd-gradient-bg"></div>
          <div className="bd-footer pt-90 pb-25">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="bd-footer-widget bd-footer-widget-1 mb-50">
                    <div className="bd-footer-logo mb-35">
                      <Link href="/">
                        <Image
                          style={{ width: "68%", height: "68%" }}
                          src={logo}
                          alt="logo"
                        />
                      </Link>
                    </div>
                    <div className="bd-footer-widget-content mb-40">
                      <p>{labels.teaser}</p>
                    </div>
                    <div className="bd-footer-bottom-social pb-20">
                      <ul>
                        {labels.social_icons.map((item) => (
                          <li key={item.id}>
                            <a target="_blank" href={item.url} rel="noreferrer">
                              <i className={item.icon}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="bd-footer-widget bd-footer-widget-2 mb-50">
                    <div className="bd-footer-widget-content">
                      <h4 className="bd-footer-widget-title mb-30">
                        {labels.quick_links.title}
                      </h4>
                      <div className="bd-footer-list">
                        <ul>
                          {labels.quick_links.menus.map((item) => (
                            <li key={item.id}>
                              <Link href={item.path}>{item.menu}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="bd-footer-widget bd-footer-widget-3 mb-50">
                    <div className="bd-footer-widget-content">
                      <h4 className="bd-footer-widget-title mb-30">
                        {labels.program_links.title}
                      </h4>
                      <div className="bd-footer-list">
                        <ul>
                          {labels.program_links.programs.map((item) => (
                            <li key={item.id}>
                              <Link href={item.path}>{item.menu}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="bd-footer-widget bd-footer-widget-4">
                    <div className="bd-footer-widget-content">
                      <h4 className="bd-footer-widget-title mb-30">
                        {labels.contactInfo.title}
                      </h4>
                      <div className="bd-footer-contact">
                        <ul>
                          <li key="contact_phone">
                            <i className="fa-light fa-phone" />
                            <a href={languageLabel.phoneNumberUrl}>
                              {languageLabel.phoneNumber}
                            </a>
                          </li>
                          <li key="contact_email">
                            <i className="fa-light fa-envelope" />
                            <a href={languageLabel.emailUrl}>
                              {languageLabel.email}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CopyrightText />
        </div>
      </footer>
    </>
  );
};

export default Footer;
