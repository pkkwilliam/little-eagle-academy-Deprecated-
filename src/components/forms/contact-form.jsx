import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import { useSelector } from "react-redux";
import execute from "src/middleware/serviceExecutor";
import { CONTACT_US } from "src/middleware/api";
import { toast } from "react-toastify";

const CONTACT_US_DELAY_MILLIS = 1500;

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.component?.contactForm ?? {};

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        number: "",
        message: "",
      },
      validationSchema: contact_schema,
      onSubmit: async (values, { resetForm }) => {
        const startMillis = new Date().getMilliseconds();
        setSending(true);
        execute(CONTACT_US(values))
          .then((response) => {
            const millisTookToProcess =
              new Date().getMilliseconds() - startMillis;
            setTimeout(() => {
              setSending(false);
              setMessageSent(true);
              toast.success(labels.messageSentToast, {
                position: "top-right",
              });
              resetForm();
            }, CONTACT_US_DELAY_MILLIS - millisTookToProcess);
          })
          .catch((error) => {
            toast.error(labels.messageFailedToSend);
            setSending(false);
          });
      },
    });
  if (sending) {
    return <div class="spinner-border text-secondary" role="status" />;
  } else if (messageSent) {
    return (
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>{labels.messageReceived}</h4>
        <button className="bd-btn" onClick={() => setMessageSent(false)}>
          <span className="bd-btn-inner">
            <span className="bd-btn-normal">{labels.sendUsAnotherMessage}</span>
            <span className="bd-btn-hover">{labels.sendUsAnotherMessage}</span>
          </span>
        </button>
      </div>
    );
  }
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-12">
          <div className="bd-contact-input mb-30">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder={labels.enterYourNamePlaceHolder}
              id="name"
            />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="bd-contact-input mb-30">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder={labels.EnterYourEmailPlaceHolder}
              id="email"
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="bd-contact-input mb-30">
            <input
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder={labels.mobileNumberPlaceHolder}
              id="number"
            />
            {touched.number && <ErrorMsg error={errors.number} />}
          </div>
        </div>
        {/* <div className="col-md-6">
          <div className="bd-contact-input custom-select-icon mb-30">
            <select name="subject" id="subject" className="bd-nice-select">
              <option>Select Subject</option>
              <option>Junior KG</option>
              <option>Senior KG</option>
            </select>
            <i className="far fa-chevron-down"></i>
          </div>
        </div> */}
        <div className="col-md-12">
          <div className="bd-contact-input mb-20">
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              id="message"
              placeholder={labels.yourMessagePlaceHolder}
            ></textarea>
            {touched.message && <ErrorMsg error={errors.message} />}
          </div>
        </div>
        {/* <div className="col-md-12">
          <div className="bd-contact-agree d-flex align-items-center mb-20">
            <input className="" type="checkbox" id="check-agree" />
            <label className="check-label" htmlFor="check-agree">
              Save Data for Next Comment
            </label>
          </div>
        </div> */}
        <div className="col-md-5">
          <div className="bd-contact-agree-btn">
            <button type="submit" className="bd-btn">
              <span className="bd-btn-inner">
                <span className="bd-btn-normal">{labels.sendNowButton}</span>
                <span className="bd-btn-hover">{labels.sendNowButton}</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
