import React from 'react';
import Image from "next/image";
import shape from "@assets/img/shape/curved-line-2.png";
import bg_1 from "@assets/img/hero/slider-3.jpg";
import bg_2 from "@assets/img/hero/slider-2.jpg";
import bg_3 from "@assets/img/hero/slider-1.jpg";
import { Scrollbar, A11y, Autoplay, EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Link from 'next/link';

const hero_data = [
    {
        id: 1,
        shape: shape,
        bg: bg_1,
        subTitle: 'Kindergarten Program',
        title: 'Best Children’s Education',
        btn: 'Admission open 22-23',
    },
    {
        id: 2,
        shape: shape,
        bg: bg_2,
        subTitle: 'Nursery Program',
        title: 'Best Nursery Education',
        btn: 'Admission open 22-23',
    },
    {
        id: 3,
        shape: shape,
        bg: bg_3,
        subTitle: 'Kindergarten Program',
        title: 'Best Junior KG Education',
        btn: 'Admission open 22-23',
    }
]

const HomeTwoHero = () => {
    return (
        <section className="bd-hero-area-2 p-relative">
            <div className="bd-hero-social-wrapper is-white">
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
            <div className="bd-hero-navigation mb-15 d-none d-md-flex">
                <button className="bd-hero-prev">
                    <i className="fa-regular fa-angle-left"></i>
                </button>
                <button className="bd-hero-next">
                    <i className="fa-regular fa-angle-right"></i>
                </button>
            </div>
            <div className="bd-hero-slider bd-hero-active">
                <div>
                    <Swiper
                        modules={[Scrollbar, A11y, Autoplay, EffectFade, Navigation]}
                        effect="fade"
                        spaceBetween={30}
                        autoplaydisableoninteraction={"false"}
                        loop={false}
                        observeParents={true}
                        observer={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true
                        }}
                        navigation={{
                            clickable: true,
                            nextEl: '.bd-hero-next',
                            prevEl: '.bd-hero-prev',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            }
                        }}
                    >
                        {hero_data.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="bd-hero-inner-2">
                                        <div className="container">
                                            <div className="bd-hero-shape-wrapper d-none d-lg-block">
                                                <div className="bd-hero-shape bd-hero-shape-2">
                                                    <Image src={item.shape} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                </div>
                                                <div className="bd-hero-shape bd-hero-shape-1">
                                                    <Image src={item.shape} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                </div>
                                            </div>
                                            <div className="bd-hero-2">
                                                <div className="bd-hero-bg" style={{ backgroundImage: `url(${item.bg.src})` }}></div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="bd-hero-content-wrapper-2 d-flex align-items-center">
                                                            <div className="bd-hero-content bd-hero-content-2 is-white">
                                                                <span className="animate__animated" data-animation="fadeInUp" data-delay=".3s">{item.subTitle}</span>
                                                                <h1 className="bd-hero-title animate__animated" data-animation="fadeInUp" data-delay=".5s">
                                                                    {item.title}
                                                                </h1>
                                                                <div className="bd-hero-btn animate__animated" data-animation="fadeInUp" data-delay=".7s">
                                                                    <Link href="/programs" className="bd-btn">
                                                                        <span className="bd-btn-inner">
                                                                            <span className="bd-btn-normal">{item.btn}</span>
                                                                            <span className="bd-btn-hover">{item.btn}</span>
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
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
        </section>
    );
};

export default HomeTwoHero;