import ContactForm from "@components/forms/contact-form";
import React from "react";
import { useSelector } from "react-redux";

const ContactFormMain = () => {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.component?.contactFormMain ?? {};
  return (
    <section className="bd-contact-area pb-60">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 mb-60">
            <div
              className="bd-contact-form wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <h3 className="bd-contact-form-title mb-25">{labels.title}</h3>
              <ContactForm />
            </div>
          </div>
          {/* <div className="col-xl-6 mb-60">
            <div
              className="bd-contact-map wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14596.899807208923!2d90.3654215!3d23.8461445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1673765392297!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactFormMain;
