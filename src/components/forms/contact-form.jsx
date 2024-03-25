import React from "react";
import { useFormik } from "formik";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";

const ContactForm = () => {
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: "",
      },
      validationSchema: contact_schema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="bd-contact-input mb-30">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Enter your name"
              id="name"
            />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="bd-contact-input mb-30">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Enter your email"
              id="email"
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="bd-contact-input mb-30">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder="Mobile no"
              id="phone"
            />
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="bd-contact-input custom-select-icon mb-30">
            <select name="subject" id="subject" className="bd-nice-select">
              <option>Select Subject</option>
              <option>Junior KG</option>
              <option>Senior KG</option>
            </select>
            <i className="far fa-chevron-down"></i>
          </div>
        </div>
        <div className="col-md-12">
          <div className="bd-contact-input mb-20">
            <textarea
              name="msg"
              value={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder="Your message"
            ></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="bd-contact-agree d-flex align-items-center mb-20">
            <input className="" type="checkbox" id="check-agree" />
            <label className="check-label" htmlFor="check-agree">Save Data for Next Comment</label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="bd-contact-agree-btn">
            <button type="submit" className="bd-btn">
              <span className="bd-btn-inner">
                <span className="bd-btn-normal">Send now</span>
                <span className="bd-btn-hover">Send now</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
