import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import radient from "@assets/img/shape/radient-path.svg";
import feedback from "@assets/img/feedback/1.png";
import shape from "@assets/img/shape/home-3-shape-1.png";

const HomeThreeAbout = () => {
    return (
        <section className="bd-feedback-area pb-60 pt-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="bd-feedback-thumb-wrapper mb-60 p-relative wow fadeInLeft" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <div className="bd-feedback-thumb p-relative">
                                <div className="bd-feedback-path-shape d-none d-md-block">
                                    <Image src={radient} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                                <div className="bd-feedback-thumb-mask p-relative">
                                    <Image src={feedback} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                    <div className="panel wow"></div>
                                </div>
                            </div>
                            <div className="bd-feedback-thumb-shape">
                                <div className="bd-feedback-thumb-shape p-absolute">
                                    <Image src={shape} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bd-section-title-wrapper mb-40 wow fadeInRight" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h2 className="bd-section-title mb-5">Playful learning<br />
                                helps children</h2>
                            <p>Early childhood development programs were first introduced during the Soviet with the
                                establish pre schools</p>
                        </div>
                        <div className="bd-feedback theme-bg-7 mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="bd-feedback-content">
                                <p className="mb-25">“This seemed great for my kindergartener-to-be, a full santa believer. Not so
                                    the winter
                                    holiday episode, and {`I'm`} not sure how {`I'm`} going to police. I really happy to see my child
                                    there”</p>
                                <h5 className="bd-feedback-author">-O.F. Donaldson</h5>
                            </div>
                        </div>
                        <div className="bd-feedback-btn mb-60 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                            <Link href="/about" className="bd-btn">
                                <span className="bd-btn-inner">
                                    <span className="bd-btn-normal">About us</span>
                                    <span className="bd-btn-hover">About us</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeThreeAbout;