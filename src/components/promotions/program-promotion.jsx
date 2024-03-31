import React from "react";
import Image from "next/image";
import promotion from "@assets/img/promotion/3.jpg";
import line from "@assets/img/shape/tripple-line.png";
import { useSelector } from "react-redux";

const ProgramPromotion = () => {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.component?.programPromotion ?? {};
  return (
    <section className="bd-promotion-area pt-120 pb-60 fix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion bd-promotion-2 mb-60 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-section-title-wrapper mb-35">
                <h2 className="bd-section-title mb-10">{labels.title}</h2>
                <span className="mb-10 d-inline-block">{labels.label1}</span>
                <p>{labels.label2}</p>
              </div>
              <div className="bd-promotion-list-2">
                <ul>
                  <li>
                    <div className="bd-promotion-icon">
                      <i className="flaticon-clean theme-bg-2"></i>
                    </div>
                    <span>{labels.key1}</span>
                  </li>
                  <li>
                    <div className="bd-promotion-icon">
                      <i className="flaticon-hand-wash theme-bg"></i>
                    </div>
                    <span>{labels.key2}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div
              className="bd-promotion-thumb-wrapper mb-60 wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-promotion-thumb">
                <div className="bd-promotion-thumb-mask p-relative">
                  <Image
                    src={promotion}
                    style={{ width: "100%", height: "100%" }}
                    alt="img not found"
                  />
                  <div className="panel-2 wow"></div>
                </div>
              </div>
              <div className="bd-promotion-shape d-none d-lg-block">
                <Image
                  src={line}
                  style={{ width: "100%", height: "100%" }}
                  alt="img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramPromotion;
