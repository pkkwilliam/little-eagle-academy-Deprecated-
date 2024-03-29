import React from "react";
import { Scrollbar, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import Link from "next/link";
import program_data from "@data/program-data";
import { useSelector } from "react-redux";

const HomeProgram = () => {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.home?.program ?? {};
  return (
    <section className="bd-program-area pt-120 pb-120">
      <div className="container">
        <div className="bd-gradient-bg"></div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="bd-section-title-wrapper text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <h2 className="bd-section-title mb-0">{labels.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: labels.description }} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="bd-program-active wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
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
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".bd-program-pagination",
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
                      slidesPerView: 3,
                    },
                  }}
                >
                  {program_data.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div
                          className={`bd-program bg-white ${
                            item.clrClass ? item.clrClass : ""
                          }`}
                        >
                          <div className="bd-program-thumb-wrapper">
                            <Link href={`/program-details/${item.id}`}>
                              <div className="bd-program-thumb">
                                <Image
                                  src={item.img}
                                  style={{ width: "100%", height: "100%" }}
                                  alt="img not found"
                                />
                              </div>
                            </Link>
                            <div className="bd-program-shape">{item.icon}</div>
                          </div>
                          <div className="bd-program-content mb-30">
                            <h3 className="bd-program-title">
                              <Link href={`/program-details/${item.id}`}>
                                {item.title}
                              </Link>
                            </h3>
                            <p>{item.description}</p>
                          </div>
                          <div className="bd-program-info-wrapper">
                            {item.programs.map((program, i) => (
                              <div className="bd-program-info" key={i}>
                                <h5 className="bd-program-info-title">
                                  {program.title} <br />
                                  <span>{program.subTitle}</span>
                                </h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="bd-program-pagination bd-dots-pagination"></div>
      </div>
    </section>
  );
};

export default HomeProgram;
