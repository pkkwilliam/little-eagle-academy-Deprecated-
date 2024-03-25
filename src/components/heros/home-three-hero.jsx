import React from 'react';
import Image from "next/image";
import shape_1 from "@assets/img/shape/wave-section-break.png";
import shape_2 from "@assets/img/shape/curved-line-1.png";
import shape_3 from "@assets/img/shape/curved-line-2.png";
import shape_4 from "@assets/img/shape/curved-big.svg";
import hero from "@assets/img/hero/hero-1.png";
import Link from 'next/link';

const HomeThreeHero = () => {
    return (
        <section className="bd-hero-area">
            <div className="bd-hero-bottom-shape d-none d-md-block">
                <Image src={shape_1} style={{ width: "100%", height: "auto" }} alt="img not found" />
            </div>
            <div className="bd-gradient-bg"></div>
            <div className="bd-hero-social-wrapper">
                <div className="bd-hero-social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i>facebook</a>
                </div>
                <div className="bd-hero-social">
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i>twitter</a>
                </div>
                <div className="bd-hero-social">
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i>youtube</a>
                </div>
            </div>
            <div className="container">
                <div className="bd-hero-inner">
                    <div className="bd-hero-shape-wrapper">
                        <div className="bd-hero-shape bd-hero-shape-1 d-none d-lg-block">
                            <Image src={shape_2} style={{ width: "100%", height: "100%" }} alt="img not found" />
                        </div>
                        <div className="bd-hero-shape bd-hero-shape-2">
                            <Image src={shape_3} style={{ width: "100%", height: "100%" }} alt="img not found" />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7">
                            <div className="bd-hero-content">
                                <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">Kindergarten Program</span>
                                <h1 className="bd-hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".35s">
                                    Best Product for Your Kids
                                </h1>
                                <div className="bd-hero-btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                    <Link href="/shop" className="bd-btn">
                                        <span className="bd-btn-inner">
                                            <span className="bd-btn-normal">Shop Latest Product</span>
                                            <span className="bd-btn-hover">Shop Latest Product</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bd-hero-thumb-wrapper">
                                <div className="bd-hero-thumb p-relative">
                                    <Image src={hero} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                                <div className="bd-hero-thumb-shape">
                                    <Image src={shape_4} style={{ width: "auto", height: "auto" }} alt="img not found" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeThreeHero;