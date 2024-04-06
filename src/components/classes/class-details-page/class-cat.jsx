import React from "react";
import { useSelector } from "react-redux";

const ClassCat = ({ item }) => {
  const { languageLabel } = useSelector((state) => state.language);
  const enumLabels = languageLabel?.enum ?? {};
  const labels = languageLabel?.component?.classCat ?? {};
  return (
    <section className="bd-shop-cat-area pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="bd-shop-cat-wrap mb-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="bd-shop-cat">
                <div className="bd-shop-cat-content">
                  <div className="bd-shop-cat-title cat-1">
                    <div className="bd-shop-cat-icon">
                      <i className="flaticon-clock-2"></i>
                    </div>
                  </div>
                  <h6>{labels.duration}</h6>
                  <span>{enumLabels.cadence[item.cadence]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="bd-shop-cat-wrap mb-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-shop-cat">
                <div className="bd-shop-cat-content">
                  <div className="bd-shop-cat-title cat-2">
                    <div className="bd-shop-cat-icon">
                      <i className="flaticon-sand-clock"></i>
                    </div>
                  </div>
                  <h6>{labels.classDuration}</h6>
                  <span>
                    {item.duration} {labels.minutes}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="bd-shop-cat-wrap mb-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".4s"
            >
              <div className="bd-shop-cat">
                <div className="bd-shop-cat-content">
                  <div className="bd-shop-cat-title cat-3">
                    <div className="bd-shop-cat-icon">
                      <i className="flaticon-class"></i>
                    </div>
                  </div>
                  <h6>{labels.classSize}</h6>
                  <span dangerouslySetInnerHTML={{ __html: item.classSize }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div
              className="bd-shop-cat-wrap mb-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="bd-shop-cat">
                <div className="bd-shop-cat-content">
                  <div className="bd-shop-cat-title cat-4">
                    <div className="bd-shop-cat-icon">
                      <i className="flaticon-reading"></i>
                    </div>
                  </div>
                  <h6>{labels.age}</h6>
                  <span>{`${item.minAge} - ${item.maxAge}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassCat;
