import React, { useEffect, useState } from "react";
import { Scrollbar, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import class_data from "@data/class-data";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getClasses } from "src/middleware/apiDataService";
import { store } from "src/redux/store";

const HomeClass = () => {
  const [classes, setClasses] = useState([]);
  const { languageLabel, selectedLanguage } = useSelector(
    (state) => state.language
  );
  const labels = languageLabel?.home?.class ?? {};

  const fetchClasses = async () => {
    const classes = await getClasses(store);
    setClasses(classes);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <section className="bd-class-area pt-110 pb-120">
      <div className="container">
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
              className="bd-class-active wow fadeInUp"
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
                    el: ".bd-class-pagination",
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
                  {classes.map((item, index) => {
                    const clazz = item;
                    const localizedClazz =
                      clazz?.localized?.[selectedLanguage] ?? {};
                    return (
                      <SwiperSlide key={index}>
                        <div className="bd-class-wrapper text-center">
                          <div className="bd-class-bg">
                            {/* <Image
                              src={shape1}
                              style={{ width: "100%", height: "100%" }}
                              alt="img not found"
                            /> */}
                          </div>
                          <div className="bd-class">
                            <div className="bd-class-icon">
                              {/* <i className={item.icon}></i> */}
                              <ClazzIcon clazz={clazz} />
                            </div>
                            <div className="bd-class-content">
                              <h3 className="bd-class-title">
                                <Link
                                  href={`/class-details/${clazz.codeName}`}
                                  dangerouslySetInnerHTML={{
                                    __html: localizedClazz.name,
                                  }}
                                />
                              </h3>
                              <p>{localizedClazz.teaser}...</p>
                              <div className="bd-class-btn">
                                <Link
                                  href={`/class-details/${item.codeName}`}
                                  className="bd-btn bd-btn-grey"
                                >
                                  <span className="bd-btn-inner">
                                    <span className="bd-btn-normal">
                                      View Detail
                                    </span>
                                    <span className="bd-btn-hover">
                                      View Detail
                                    </span>
                                  </span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
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

const ClazzIcon = ({ clazz }) => {
  if (clazz.iconName) {
    return <i className={clazz.iconName}></i>;
  } else {
    return (
      <Image
        src={clazz.imageUrls[0]}
        height={50}
        width={50}
        style={{
          alignSelf: "center",
          borderRadius: 100,
          height: "95%",
          width: "95%",
        }}
      />
    );
  }
};

export default HomeClass;
