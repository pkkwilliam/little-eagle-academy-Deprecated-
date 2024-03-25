import React from 'react';
import Image from "next/image";
import error from "@assets/img/bg/error-404.svg";
import Link from 'next/link';

const ErrorPageMain = () => {
    return (
        <section className="bd-erro-area pt-120 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="bd-section-title-wrapper mb-45">
                            <h2 className="bd-section-title mb-0">OOPS! PAGE NOT FOUND!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                                urna. Pellentesque sit amet sapien.</p>
                        </div>
                        <div className="bd-error-btn">
                            <Link href="/" className='bd-btn'>
                                <span className="bd-btn-inner">
                                    <span className="bd-btn-normal d-flex align-items-center"><i className="flaticon-hut"></i>Back To Home</span>
                                    <span className="bd-btn-hover d-flex align-items-center"><i className="flaticon-hut"></i>Back To Home</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="bd-error-thumb-wrapper">
                            <div className="bd-error-thumb">
                                <Image src={error} style={{ width: "100%", height: "100%" }} alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ErrorPageMain;