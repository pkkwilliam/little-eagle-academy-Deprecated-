import ErrorMsg from "@components/forms/error-msg";
import { subscribe_news_letter_schema } from "@utils/validation-schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { SUBSCRIBE_NEWS_LETTER } from "src/middleware/api";
import execute from "src/middleware/serviceExecutor";

const HomeNewsletter = () => {
  const [subscribeSent, setSubscribeSent] = useState(false);
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.component?.newsLetter ?? {};

  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: subscribe_news_letter_schema,
      onSubmit: async (values, { resetForm }) => {
        execute(SUBSCRIBE_NEWS_LETTER(values))
          .then((response) => {
            setSubscribeSent(true);
            toast.success(labels.subscribedSuccessToast),
              { position: "top-right" };
            resetForm();
          })
          .catch((message) => {
            toast.error(labels.subscriptionRequestFailed, {
              position: "top-right",
            });
          });
      },
    });

  return (
    <section className="bd-newsletter-area">
      <div className="container">
        <div className="bd-newsletter pt-100 pb-100 theme-bg">
          <div
            className="bd-newsletter-bg"
            style={{ backgroundImage: "url(/assets/img/bg/newsletter-bg.jpg)" }}
          ></div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="bd-newsletter-content">
                <div className="bd-section-title-wrapper text-center is-white mb-45">
                  <h2 className="bd-section-title mb-0">{labels.title}</h2>
                  <p>{labels.description}</p>
                </div>
                {subscribeSent ? (
                  <SubscribeSuccess labels={labels} />
                ) : (
                  <div className="bd-newsletter-form">
                    <form onSubmit={handleSubmit}>
                      <div className="bd-newsletter-input">
                        <input
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"
                          placeholder={labels.yourEmailPlaceHolder}
                          id="email"
                        />
                        {touched.email && <ErrorMsg error={errors.email} />}
                        <button type="submit" className="bd-btn">
                          <span className="bd-btn-inner">
                            <span className="bd-btn-normal">
                              <i className="fa-sharp fa-solid fa-paper-plane"></i>
                              {labels.subscribeNowButton}
                            </span>
                            <span className="bd-btn-hover">
                              <i className="fa-sharp fa-solid fa-paper-plane"></i>
                              {labels.subscribeNowButton}
                            </span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SubscribeSuccess = ({ labels }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        padding: 5,
      }}
    >
      <h4>{labels.subscribed}</h4>
    </div>
  );
};

export default HomeNewsletter;
