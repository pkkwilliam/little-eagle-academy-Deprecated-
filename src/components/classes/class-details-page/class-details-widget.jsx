import Link from 'next/link';
import React from 'react';
import Image from "next/image";
import program_img from "@assets/img/program/details-1.jpg";


const ClassDetailsWidget = () => {
    return (
        <section className="bd-program-details-widget pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-50">
                        <div className="bd-program-details-widget-content theme-bg-6 wow fadeInLeft" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <h3 className="bd-program-details-widget-title mb-20">Way to Learn</h3>
                            <p className="mb-25">As a result, the child should have a reasonable amount of freedom to do as they
                                please, while at the same time being wholly immersed in an environment which stimulates their
                                senses as well as exercising their creativity. Literally their classroom is their world,
                                providing exposure to materials and experiences that foster greater intellectual growth. You
                                will love it.</p>
                            <p className="mb-25">Please take a moment to read this website, and I’m sure that you will come to
                                agree that there would be better place. </p>
                            <div className="bd-program-details-btn">
                                <Link href="/about" className="bd-btn">
                                    <span className="bd-btn-inner">
                                        <span className="bd-btn-normal">Know More</span>
                                        <span className="bd-btn-hover">Know More</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-50">
                        <div className="bd-program-details-slider p-relative wow fadeInRight" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <div className="bd-program-details-slider-thumb p-relative">
                                <Image src={program_img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                <div className="panel-2 wow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassDetailsWidget;