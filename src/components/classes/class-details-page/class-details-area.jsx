import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ClassCat from "./class-cat";
import ClassDetailsWidget from "./class-details-widget";
import ClassTimeTable from "./class-time-table";
import ClassDetailsWidgetTwo from "./class-details-widget-two";
import class_img from "@assets/img/class/6.jpg";
import author_img from "@assets/img/program/author-1.png";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import { useSelector } from "react-redux";
import { TRIAL_TYPE_FREE } from "src/enum/TrialType";
import { Button, Form, Image, Modal } from "react-bootstrap";
import ClassRegistrationModal from "./class-registration-modal";
import { ENROLL_TYPE_STANDARD, ENROLL_TYPE_TRIAL } from "src/enum/enrollType";
import ClassTrialBanner from "./class-trial-banner";
import PrimaryButton from "@components/common/primary-button";
import { getServerLocalizedLabel } from "@utils/localized-util";

const ClassDetailsArea = ({ item }) => {
  const { languageLabel, selectedLanguage } = useSelector(
    (state) => state.language
  );

  const enumLabels = languageLabel?.enum ?? {};
  const labels = languageLabel?.component?.classDetailsArea ?? {};
  const clazz = item;
  const courses = clazz?.courses ?? [];
  const clazzLocalization = getServerLocalizedLabel(item, selectedLanguage);
  const instructor = item?.instructor ?? {};
  const localizedInstructor = instructor?.localized?.[selectedLanguage] ?? {};
  return (
    <>
      <Breadcrumb
        title={languageLabel?.page?.classDetail ?? "Class Details"}
        subTitle={languageLabel?.page?.classDetail ?? "Class Details"}
      />
      <section className="bd-class-details-widget pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 mb-50">
              <div
                className="bd-class-details-thumb p-relative wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <Image
                  src={item?.imageUrls?.[0] ? item?.imageUrls?.[0] : class_img}
                  // style={{ width: "100%", height: "100%" }}
                  height={1}
                  width={1}
                  alt="img not found"
                />
                <div className="panel wow"></div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 mb-50">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="bd-class-details-widget-content theme-bg-6 wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <h3
                    className="bd-class-details-widget-title mb-20"
                    dangerouslySetInnerHTML={{ __html: clazzLocalization.name }}
                  />
                  <p
                    className="mb-25"
                    dangerouslySetInnerHTML={{
                      __html: clazzLocalization.description,
                    }}
                  />
                </div>
                <div
                  className="bd-class-details-widget-content theme-bg-6 wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay
                  style={{ marginTop: 15 }}
                >
                  <div>
                    <div>
                      {courses.map((course, index) => {
                        const dateConcatedString = course.scheduledDates.reduce(
                          (acc, cur) => acc + cur + ", ",
                          ""
                        );
                        const dateString =
                          dateConcatedString && dateConcatedString.length > 2
                            ? dateConcatedString.substring(
                                0,
                                dateConcatedString.length - 2
                              )
                            : "";
                        return (
                          <div key={"course" + index}>
                            <h6>{course.name}</h6>
                            <span>{dateString}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      className="bd-class-details-author-wrapper mt-35"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      {/* <div className="bd-class-details-author">
                    <div className="bd-class-details-author-thumb">
                      <Image
                        src={
                          instructor?.imageUrls?.[0]
                            ? instructor.imageUrls[0]
                            : author_img
                        }
                        // style={{ width: "100%", height: "100%" }}
                        height={1}
                        width={1}
                        alt="img not found"
                      />
                    </div>
                    <div className="bd-class-details-author-name">
                      <span>{labels.classTeach}</span>
                      <h5>
                        <Link href={`/teacher-details/${instructor.name}`}>
                          {localizedInstructor.name}
                        </Link>
                      </h5>
                    </div>
                  </div> */}
                      {/* <div className="bd-class-details-cat">
                    <span>{labels.category}</span>
                    <h5>Kindergarten</h5>
                  </div> */}
                      {/* <div className="bd-class-details-cat">
                    <span>
                      $
                      {`${labels.pricePerUnit}/${
                        enumLabels?.priceUnit?.[clazz.priceUnit]
                      }`}
                    </span>
                    <h5>${item?.price}</h5>
                  </div>
                  <div className="bd-class-details-cat">
                    {clazz.courses?.length > 0 ? (
                      <ClassRegistrationModal
                        clazz={clazz}
                        clazzLocalization={clazzLocalization}
                        enrollType={ENROLL_TYPE_STANDARD}
                      >
                        <button type="submit" className="bd-btn">
                          <span className="bd-btn-inner">
                            <span className="bd-btn-normal">Enroll</span>
                            <span className="bd-btn-hover">Enroll</span>
                          </span>
                        </button>
                      </ClassRegistrationModal>
                    ) : null}
                  </div> */}
                      <div>
                        <span>
                          {`${labels.pricePerUnit}/${
                            enumLabels?.priceUnit?.[clazz.priceUnit]
                          }`}
                        </span>
                        <h4>${item?.price}</h4>
                      </div>
                      <div>
                        {clazz.courses?.length > 0 ? (
                          <ClassRegistrationModal
                            clazz={clazz}
                            clazzLocalization={clazzLocalization}
                            enrollType={ENROLL_TYPE_STANDARD}
                          >
                            <button type="submit" className="bd-btn">
                              <span className="bd-btn-inner">
                                <span className="bd-btn-normal">
                                  {labels.enroll}
                                </span>
                                <span className="bd-btn-hover">
                                  {labels.enroll}
                                </span>
                              </span>
                            </button>
                          </ClassRegistrationModal>
                        ) : (
                          <Link href={"/contact"}>
                            <button type="submit" className="bd-btn">
                              <span className="bd-btn-inner">
                                <span className="bd-btn-normal">
                                  Contact Us
                                </span>
                                <span className="bd-btn-hover">Contact Us</span>
                              </span>
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {clazz.trialAvailable && (
        <section className="bd-class-details-widget pb-70">
          <ClassRegistrationModal
            clazz={clazz}
            clazzLocalization={clazzLocalization}
            enrollType={ENROLL_TYPE_TRIAL}
          >
            <ClassTrialBanner>
              <PrimaryButton>{labels.trial}</PrimaryButton>
            </ClassTrialBanner>
          </ClassRegistrationModal>
        </section>
      )}

      <ClassCat item={item} />

      <ClassDetailsWidget clazz={clazz} clazzLocalization={clazzLocalization} />
      {/* <ClassDetailsWidgetTwo /> */}
    </>
  );
};

export default ClassDetailsArea;
