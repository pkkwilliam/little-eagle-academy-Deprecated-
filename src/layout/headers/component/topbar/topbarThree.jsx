import React from 'react';
import Image from "next/image";
import wave from "@assets/img/shape/wave-section-break.png";

const TopbarThree = () => {
    return (
        <div className="bd-header-top d-none d-lg-block bg-white">
            <div className="bd-header-top-shape">
                <Image src={wave} style={{ width: "100%", height: "100%" }} alt="img not found" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bd-header-top-wrapper d-flex justify-content-between">
                            <div className="bd-header-top-right d-flex align-items-center">
                                <div className="bd-header-meta-items">
                                    <div className="bd-header-meta-item d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fa-solid fa-tag"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p>Save 40% on Kids Product with “<span>kendedo200</span>” Code</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bd-header-top-left">
                                <div className="bd-header-meta-items d-flex align-items-center">
                                    <div className="bd-header-meta-item d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p><a href="tel:9072003462">907-200-3462</a></p>
                                        </div>
                                    </div>
                                    <div className="bd-header-meta-item d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p><a href="mailto:support@kindedo.com">support@kindedo.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopbarThree;