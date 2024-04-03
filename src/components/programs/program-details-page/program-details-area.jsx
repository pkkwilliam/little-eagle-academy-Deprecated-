import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import React from "react";
import Image from "next/image";
import program_2 from "@assets/img/program/home-program-2.jpg";
import program_3 from "@assets/img/program/home-program-3.jpg";
import { Scrollbar, A11y, Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ProgramCat from "./program-cat";
import ClassDetailsWidget from "@components/classes/class-details-page/class-details-widget";
import ClassDetailsWidgetTwo from "@components/classes/class-details-page/class-details-widget-two";
import HomeBanner from "@components/banners/home-banner";
import LearningSchedule from "./learning-schedule";
import MoreProgrammers from "@components/classes/class-details-page/more-programmers";

const ProgramDetailsArea = ({ item }) => {
  return (
    <>
      <Breadcrumb title="Program Details" subTitle="Program Details" />

      <section className="bd-program-details-widget pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 mb-50">
              <div
                className="bd-program-details-slider p-relative wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-program-details-active">
                  <div className="bd-h-full">
                    <Swiper
                      modules={[
                        Scrollbar,
                        A11y,
                        Autoplay,
                        EffectFade,
                        Navigation,
                      ]}
                      effect="fade"
                      spaceBetween={0}
                      autoplaydisableoninteraction={"false"}
                      loop={false}
                      observeParents={true}
                      observer={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                      }}
                      navigation={{
                        clickable: true,
                        nextEl: ".bd-program-details-next",
                        prevEl: ".bd-program-details-prev",
                      }}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="bd-program-details-slider-thumb">
                          {item.img && (
                            <Image
                              src={item.img}
                              style={{ width: "100%", height: "100%" }}
                              alt="img not found"
                            />
                          )}
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="bd-program-details-slider-thumb">
                          <Image
                            src={program_2}
                            style={{ width: "100%", height: "100%" }}
                            alt="img not found"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="bd-program-details-slider-thumb">
                          <Image
                            src={program_3}
                            style={{ width: "100%", height: "100%" }}
                            alt="img not found"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="bd-program-details-navigation mb-15 d-none d-sm-flex">
                  <button className="bd-program-details-next">
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                  <button className="bd-program-details-prev">
                    <i className="fa-regular fa-angle-left"></i>
                  </button>
                </div>
                <div className="panel wow"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-50">
              <div
                className="bd-program-details-widget-content theme-bg-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 className="bd-program-details-widget-title mb-20">
                  {item.title}
                </h3>
                <p className="mb-25">{item.introduction}</p>
                <div className="bd-program-details-author-wrapper mt-35">
                  <div className="bd-program-details-author">
                    <div className="bd-program-details-author-thumb">
                      {item.authorImg && (
                        <Image
                          src={item.authorImg}
                          style={{ width: "100%", height: "100%" }}
                          alt="img not found"
                        />
                      )}
                    </div>
                    <div className="bd-program-details-author-name">
                      <span>Settling Teacher</span>
                      <h5>{item.authorName}</h5>
                    </div>
                  </div>
                  <div className="bd-program-details-cat">
                    <span>Categories</span>
                    <h5>{item.title}</h5>
                  </div>
                  <div className="bd-program-details-cat">
                    <span>Per/Month</span>
                    <h5>${item.price}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProgramCat />
      <ClassDetailsWidget />
      <LearningSchedule />
      <ClassDetailsWidgetTwo />
      <HomeBanner />
      <MoreProgrammers />
    </>
  );
};

export default ProgramDetailsArea;
