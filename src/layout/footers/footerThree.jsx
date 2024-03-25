import footer_data from '@data/footer-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CopyrightText from './component/copyright-text';
import shape_line from "@assets/img/shape/line-bottom-shape.png";

const FooterThree = () => {
    return (
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
                                            <Image style={{ width: "auto", height: "auto" }} src={footer_data.description.logo} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="bd-footer-widget-content mb-40">
                                        <p>{footer_data.description.teaser}</p>
                                    </div>
                                    <div className="bd-footer-bottom-social pb-20">
                                        <ul>
                                            {footer_data.description.social_icons.map((item) => (
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
                                        <h4 className="bd-footer-widget-title mb-30">{footer_data.quick_links.title}</h4>
                                        <div className="bd-footer-list">
                                            <ul>
                                                {footer_data.quick_links.menus.map((item) => (
                                                    <li key={item.id}><Link href={item.path}>{item.menu}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="bd-footer-widget bd-footer-widget-3 mb-50">
                                    <div className="bd-footer-widget-content">
                                        <h4 className="bd-footer-widget-title mb-30">{footer_data.customer_services.title}</h4>
                                        <div className="bd-footer-list">
                                            <ul>
                                                {footer_data.customer_services.services.map((item) => (
                                                    <li key={item.id}><Link href={item.path}>{item.menu}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="bd-footer-widget bd-footer-widget-4">
                                    <div className="bd-footer-widget-content">
                                        <h4 className="bd-footer-widget-title mb-30">{footer_data.contact_info.title}</h4>
                                        <div className="bd-footer-contact">
                                            <ul>
                                                {footer_data.contact_info.infos.map((item) => (
                                                    <li key={item.id}><i className={item.icon}></i><a href={item.url}>{item.title}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyrightText copyright_space="pb-10" copyright_shape={shape_line} />
            </div>
        </footer>
    );
};

export default FooterThree;