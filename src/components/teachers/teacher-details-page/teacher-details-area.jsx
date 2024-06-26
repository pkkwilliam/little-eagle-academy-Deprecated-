import React, { useEffect, useState } from "react";
import TeacherSkills from "./teacher-skills";
import TeacherInfo from "./teacher-info";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import Image from "next/image";
import img_2 from "@assets/img/teacher/2.jpg";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getInstructors } from "src/middleware/apiDataService";
import { store } from "src/redux/store";

const TeacherDetailsArea = ({ instructor }) => {
  const { languageLabel, selectedLanguage } = useSelector(
    (state) => state.language
  );
  const localizedInstructor = instructor?.localized?.[selectedLanguage] ?? {};
  const labels = languageLabel?.component?.teacherDetailsArea ?? {};
  // Should add a teacherIcon in backend instead
  const image = instructor?.imageUrls?.[1]
    ? instructor.imageUrls[1]
    : instructor?.imageUrls?.[0]
    ? instructor.imageUrls[0]
    : img_2;
  return (
    <>
      <Breadcrumb title="Teacher Details" subTitle="Teacher Details" />
      <section className="bd-teacher-widget-area pb-70 pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-50">
              <div
                className="bd-teacher-widget wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-teacher-widget-thumb p-relative">
                  {
                    <Image
                      src={image}
                      height={1}
                      width={1}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      alt="img not found"
                    />
                  }
                  <div className="panel wow"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-50">
              <TeacherInfo localizedInstructor={localizedInstructor} />
            </div>
            {/* <TeacherSkills /> */}
            <TeacherMessage
              labels={labels}
              localizedInstructor={localizedInstructor}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const TeacherMessage = ({ labels, localizedInstructor }) => {
  return (
    <div
      className="bd-teacher-widget theme-bg-6 wow fadeInRight"
      data-wow-duration="1s"
      data-wow-delay=".3s"
    >
      <div className="bd-teacher-widget-content">
        <h4>{labels.aboutMe}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: localizedInstructor.description,
          }}
        />
        {/* {item.social_links && (
      <div className="bd-teacher-widget-social">
        <span>Follow Me:</span>
        <ul>
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
        </ul>
      </div>
    )} */}
      </div>
    </div>
  );
};

export default TeacherDetailsArea;
