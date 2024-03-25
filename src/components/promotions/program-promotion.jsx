import React from 'react';
import Image from "next/image";
import promotion from "@assets/img/promotion/3.jpg";
import line from "@assets/img/shape/tripple-line.png";

const ProgramPromotion = () => {
    return (
        <section className="bd-promotion-area pt-120 pb-60 fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-promotion bd-promotion-2 mb-60 wow fadeInLeft" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <div className="bd-section-title-wrapper mb-35">
                                <h2 className="bd-section-title mb-10">Health and Safety</h2>
                                <span className="mb-10 d-inline-block">
                                    Some states and countries implement mandatory early childhood education
                                    such rules, many preschool.
                                </span>
                                <p> Being brave isn’t always a grand gesture sometimes it just means having a go attempting that
                                    difficult question, offering an answer in a lesson when you’re simply really trying new.
                                </p>
                            </div>
                            <div className="bd-promotion-list-2">
                                <ul>
                                    <li>
                                        <div className="bd-promotion-icon">
                                            <i className="flaticon-clean theme-bg-2"></i>
                                        </div>
                                        <span>Nightly cleaning</span>
                                    </li>
                                    <li>
                                        <div className="bd-promotion-icon">
                                            <i className="flaticon-hand-wash theme-bg"></i>
                                        </div>
                                        <span>Hand Washing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-promotion-thumb-wrapper mb-60 wow fadeInRight" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <div className="bd-promotion-thumb">
                                <div className="bd-promotion-thumb-mask p-relative">
                                    <Image src={promotion} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                    <div className="panel-2 wow"></div>
                                </div>
                            </div>
                            <div className="bd-promotion-shape d-none d-lg-block">
                                <Image src={line} style={{ width: "100%", height: "100%" }} alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgramPromotion;