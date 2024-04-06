import teacher_data from "@data/teacher-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getInstructors } from "src/middleware/apiDataService";
import { store } from "src/redux/store";
import img_1 from "@assets/img/teacher/1.jpg";

const TeacherPageMain = () => {
  const [instructors, setInstructors] = useState([]);
  const { selectedLanguage } = useSelector((state) => state.language);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    const instructrosResult = await getInstructors(store);
    setInstructors(instructrosResult);
  };

  return (
    <section className="bd-teacher-area pt-120 pb-80">
      <div className="container">
        <div className="row">
          {instructors.map((item) => {
            const localizedInstructor = item.localized[selectedLanguage];
            return (
              <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
                <div
                  className="bd-teacher mb-40 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={item.delay}
                >
                  <Link href={`/teacher-details/${item.id}`}>
                    <div className="bd-teacher-thumb">
                      <Image
                        src={img_1}
                        style={{ width: "100%", height: "100%" }}
                        alt="img not found"
                      />
                    </div>
                  </Link>
                  <div className="bd-teacher-content-wrapper">
                    <div className="bd-teacher-content">
                      <h4 className="bd-teacher-title">
                        <Link href={`/teacher-details/${item.id}`}>
                          {localizedInstructor.name}
                        </Link>
                      </h4>
                      <span className="bd-teacher-des">
                        {localizedInstructor.title}
                      </span>
                    </div>
                    <div className="bd-teacher-social">
                      <ul>
                        {/* {item.social_links.map((social, i) => (
                          <li key={i}>
                            <a
                              target={social.target}
                              href={social.link}
                              rel="noreferrer"
                            >
                              <i className={social.icon}></i>
                            </a>
                          </li>
                        ))} */}
                        <li>View Detail</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeacherPageMain;
