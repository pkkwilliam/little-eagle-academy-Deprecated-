import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Scrollbar, A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import teacher_data from "@data/teacher-data";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getInstructors } from "src/middleware/apiDataService";
import { store } from "src/redux/store";
import img_1 from "@assets/img/teacher/1.jpg";

const HomeTeacher = () => {
  const [instructors, setInstructors] = useState([]);
  const { languageLabel, selectedLanguage } = useSelector(
    (state) => state.language
  );
  const labels = languageLabel?.home?.teacher ?? {};

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    const instructrosResult = await getInstructors(store);
    setInstructors(instructrosResult);
  };

  return (
    <section className="bd-teacher-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="bd-section-title-wrapper text-center mb-55 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h2 className="bd-section-title mb-0">{labels.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: labels.description }} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="bd-teacher-active wow fadeInLeft"
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
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    clickable: true,
                    el: ".bd-teacher-pagination",
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {instructors.map((item, index) => {
                    const instructor = item;
                    const localizedInstructor =
                      item?.localized?.[selectedLanguage] ?? {};
                    return (
                      <SwiperSlide key={index}>
                        <div className="bd-teacher">
                          <Link href={`/teacher-details/${instructor.name}`}>
                            <div className="bd-teacher-thumb">
                              <Image
                                src={
                                  item.imageUrls?.length > 0
                                    ? item.imageUrls[0]
                                    : img_1
                                }
                                height={1}
                                width={1}
                                style={{ width: "100%", height: "100%" }}
                                alt="img not found"
                              />
                            </div>
                          </Link>
                          <div className="bd-teacher-content-wrapper">
                            <div className="bd-teacher-content">
                              <h4 className="bd-teacher-title">
                                <Link
                                  href={`/teacher-details/${instructor.name}`}
                                >
                                  {localizedInstructor.name}
                                </Link>
                              </h4>
                              <span className="bd-teacher-des">
                                {localizedInstructor.title}
                              </span>
                            </div>
                            <div className="bd-teacher-social">
                              {/* <ul>
                                {item.social_links.map((social, i) => (
                                  <li key={i}>
                                    <a
                                      target={social.target}
                                      href={social.link}
                                      rel="noreferrer"
                                    >
                                      <i className={social.icon}></i>
                                    </a>
                                  </li>
                                ))}
                              </ul> */}
                              View Detail
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
            <div className="bd-teacher-pagination bd-dots-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTeacher;
