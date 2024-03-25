import program_data from '@data/program-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProgramPageMain = () => {
    return (
        <section className="bd-program-area pt-120 pb-80">
            <div className="container">
                <div className="row">
                    {program_data.map((item) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                            <div className={`bd-program mb-40 wow fadeInUp ${item.clrClass ? item.clrClass : ''}`} data-wow-duration="1s" data-wow-delay={item.delay}>
                                <div className="bd-program-thumb-wrapper">
                                    <Link href={`/program-details/${item.id}`}>
                                        <div className="bd-program-thumb">
                                            <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </div>
                                    </Link>
                                    <div className="bd-program-shape">
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="bd-program-content mb-30">
                                    <h3 className="bd-program-title">
                                        <Link href={`/program-details/${item.id}`}>{item.title}</Link>
                                    </h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="bd-program-info-wrapper">
                                    {item.programs.map((program, i) => (
                                        <div className="bd-program-info" key={i}>
                                            <h5 className="bd-program-info-title">{program.title} <br /><span>{program.subTitle}</span></h5>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramPageMain;