import React from 'react';
import Image from "next/image";
import bg from "@assets/img/bg/teacher-bg.jpg";
import teacher_data from '@data/teacher-data';
import Link from 'next/link';

const HomeTwoTeacher = () => {
    return (
        <section className="bd-teacher-area-2 theme-bg">
            <div className="container">
                <div className="bd-teacher-bg-wrapper pt-120 pb-120 p-relative">
                    <div className="bd-teacher-bg d-none d-xl-block" style={{ backgroundImage: `url(${bg.src})` }}></div>
                    <div className="bd-teacher-overlay"></div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="bd-section-title-wrapper z-index-1 p-relative is-white text-center mb-55 wow fadeInUp"
                                data-wow-duration="1s" data-wow-delay=".2s">
                                <h2 className="bd-section-title mb-0">Our Best Teachers</h2>
                                <p>With the help of teachers and the environment as the third teacher, students<br /> have opportunities to confidently take risks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-teacher-wrapper">
                                <div className="row">
                                    {teacher_data.slice(0,4).map((item) => (
                                        <div className="col-xl-3 col-lg-6 col-md-6" key={item.id}>
                                            <div className="bd-teacher-2 p-relative z-index-1 mb-40 wow fadeInUp" data-wow-duration="1s"
                                                data-wow-delay={item.delay}>
                                                <div className="bd-teacher-thumb-wrapper-2 mb-20 p-relative">
                                                    <Link href={`/teacher-details/${item.id}`}>
                                                        <div className="bd-teacher-thumb-2">
                                                            <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                        </div>
                                                    </Link>
                                                    <div className="bd-teacher-social-2">
                                                        <ul>
                                                            {item.social_links.map((social, i) => (
                                                                <li key={i}>
                                                                    <a target={social.target} href={social.link} rel="noreferrer"><i className={social.icon}></i></a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="bd-teacher-content-wrapper-2">
                                                    <div className="bd-teacher-content-2 text-center">
                                                        <h4 className="bd-teacher-title-2 mb-5"><Link href={`/teacher-details/${item.id}`}>{item.name}</Link></h4>
                                                        <span className="bd-teacher-des is-white">{item.designation}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bd-teacher-view-btn p-relative z-index-1 text-center mt-10">
                                    <Link href="/teachers">View Our All Teacher</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTwoTeacher;