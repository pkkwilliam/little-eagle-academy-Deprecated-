import React from "react";
import faqImg from "@assets/img/faq/1.jpg";
import trippleLine from "@assets/img/shape/tripple-line.png";
import Image from "next/image";


const HomeAbout = () => {
  return (
    <>
      <section className="bd-faq-area pt-120 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="bd-faq-content mb-60">
                <div className="bd-section-title-wrapper mb-25 wow fadeInLeft" data-wow-duration="1s"
                  data-wow-delay=".3s">
                  <h2 className="bd-section-title mb-0">Know More
                    <br />About Kindedo
                  </h2>
                </div>
                <div className="bd-faq wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          What is the best age to start Kindergarten?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show"
                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Some states and countries implement mandatory early childhood education. With
                            such rules, many preschool and kindergarten learning centers are built.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Which is the best preschool for your child ?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Right after you book your party, you’ll receive an email confirming the date,
                            time, and details about what’s included in the package you’ve selected result.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          What is the toution fee on first year?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>There will also be some fantastic outdoor entertainment, desserts and drinks,
                            plus tours of the School for those who want to continue the celebrations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="bd-faq-thumb-wrapper mb-70 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="bd-faq-thumb">
                  <div className="bd-faq-thumb-mask p-relative wow fadeInRight" data-wow-duration="1s"
                    data-wow-delay=".3s">
                    <Image
                      src={faqImg}
                      style={{ width: "100%", height: "100%" }}
                      alt="faq img"
                    />
                    <div className="panel-2 wow"></div>
                  </div>
                </div>
                <div className="bd-faq-shape d-none p-relative d-lg-block">
                  <Image
                    src={trippleLine}
                    style={{ width: "100%", height: "100%" }}
                    alt="shape not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
