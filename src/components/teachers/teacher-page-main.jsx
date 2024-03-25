import teacher_data from '@data/teacher-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeacherPageMain = () => {
    return (
        <section className="bd-teacher-area pt-120 pb-80">
            <div className="container">
                <div className="row">
                    {teacher_data.map((item) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
                            <div className="bd-teacher mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                                <Link href={`/teacher-details/${item.id}`}>
                                    <div className="bd-teacher-thumb">
                                        <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                    </div>
                                </Link>
                                <div className="bd-teacher-content-wrapper">
                                    <div className="bd-teacher-content">
                                        <h4 className="bd-teacher-title"><Link href={`/teacher-details/${item.id}`}>{item.name}</Link></h4>
                                        <span className="bd-teacher-des">{item.designation}</span>
                                    </div>
                                    <div className="bd-teacher-social">
                                        <ul>
                                            {item.social_links.map((social, i) => (
                                                <li key={i}>
                                                    <a target={social.target} href={social.link} rel="noreferrer"><i className={social.icon}></i></a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeacherPageMain;