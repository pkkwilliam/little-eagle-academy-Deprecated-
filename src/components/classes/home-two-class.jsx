import React from 'react';
import { Scrollbar, A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import class_data from '@data/class-data';
import Link from 'next/link';

const HomeTwoClass = () => {
    return (
        <section className="bd-class-area pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".2s">
                            <h2 className="bd-section-title mb-0">Our Offerings</h2>
                            <p>Our multi-level kindergarten programs cater to the age group of 2-5 years<br /> with a curriculum
                                focussing children.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bd-class-active-2 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div>
                                <Swiper
                                    modules={[Scrollbar, A11y, Autoplay, Pagination]}
                                    spaceBetween={24}
                                    autoplaydisableoninteraction={"false"}
                                    loop={false}
                                    observeParents={true}
                                    observer={true}
                                    speed={1000}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: true
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.bd-class-pagination',
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 2,
                                        }
                                    }}
                                >
                                    {class_data.slice(0, 4).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="bd-class-wrapper-2 text-center">
                                                    <div className={`bd-class-2 ${item.clrClass ? item.clrClass : ''}`}>
                                                        <div className="bd-class-icon-wrapper">
                                                            <div className="bd-class-icon-2">
                                                                <i className={item.icon}></i>
                                                            </div>
                                                        </div>
                                                        <div className="bd-class-content">
                                                            <h3 className="bd-class-title"><Link href={`/class-details/${item.id}`}>{item.title}</Link></h3>
                                                            <p>{item.teaser.substring(0, 55)}...</p>
                                                            <div className="bd-class-btn">
                                                                <Link href={`/class-details/${item.id}`} className="bd-btn bd-btn-grey">
                                                                    <span className="bd-btn-inner">
                                                                        <span className="bd-btn-normal">{item.btn}</span>
                                                                        <span className="bd-btn-hover">{item.btn}</span>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="bd-class-pagination bd-dots-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTwoClass;