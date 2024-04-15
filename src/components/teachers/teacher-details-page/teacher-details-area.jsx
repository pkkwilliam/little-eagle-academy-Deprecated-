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

const TeacherDetailsArea = (props) => {
  const [instructor, setInstructor] = useState({});
  const { selectedLanguage } = useSelector((state) => state.language);
  const localizedInstructor = instructor?.localized?.[selectedLanguage] ?? {};

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    fetchInstructor();
  }, [id]);

  const fetchInstructor = async () => {
    const instructrosResult = await getInstructors(store);
    setInstructor(instructrosResult.find((result) => result.id === id));
  };

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
                      src={
                        instructor?.imageUrls?.[0]
                          ? instructor.imageUrls[0]
                          : img_2
                      }
                      height={1}
                      width={1}
                      // style={{ width: "100%", height: "100%" }}
                      alt="img not found"
                    />
                  }
                  <div className="panel wow"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-50">
              <div
                className="bd-teacher-widget theme-bg-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="bd-teacher-widget-content">
                  <h3 className="bd-teacher-widget-title">
                    {localizedInstructor.name}
                  </h3>
                  <span className="bd-teacher-widget-tag">
                    {localizedInstructor.title}
                  </span>
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
            </div>
            <TeacherSkills />
            <TeacherInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherDetailsArea;

export async function getStaticPaths(context) {
  return {
    paths: ["/teachers"], //indicates that no page needs be created at build time
    fallback: true, //indicates the type of fallback
  };
}
