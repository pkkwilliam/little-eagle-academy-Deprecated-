import React from "react";
import { useSelector } from "react-redux";

const ContactInfo = () => {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel ?? {};
  return (
    <section className="bd-contact-info-area pt-120 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div
              className="bd-contact-info-wrap mb-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <div className="bd-contact-info">
                <div className="bd-contact-info-content">
                  <div className="bd-contact-info-icon cat-1">
                    <a href={`tel:${labels.phoneNumber}`}>
                      <i className="flaticon-phone-call"></i>
                    </a>
                  </div>
                  <h6>
                    <a href={`tel:${labels.phoneNumber}`}>
                      {labels.phoneNumber}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div
              className="bd-contact-info-wrap mb-30 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".5s"
            >
              <div className="bd-contact-info">
                <div className="bd-contact-info-content">
                  <div className="bd-contact-info-icon cat-3">
                    <a href={`mailto:${labels.email}`}>
                      <i className="flaticon-email"></i>
                    </a>
                  </div>
                  <h6>
                    <a href={`mailto:${labels.email}`}>{labels.email}</a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
