import class_data from "@data/class-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getClasses } from "src/middleware/apiDataService";
import { store } from "src/redux/store";

const ClassPageMain = () => {
  const { languageLabel, selectedLanguage } = useSelector(
    (state) => state.language
  );
  const [classes, setClasses] = useState([]);

  const enumLabels = languageLabel?.enum ?? { priceUnit: {} };

  const fetchClasses = async () => {
    const classes = await getClasses(store);
    setClasses(classes);
  };
  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <section className="bd-class-area pt-110 pb-70">
      <div className="container">
        <div className="row">
          {classes.map((item) => {
            const clazz = item.localized[selectedLanguage];
            const instructor = item.instructor;
            const localizedInstructor = instructor.localized[selectedLanguage];
            return (
              <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                <div
                  className="bd-class-3 fix radius-24 p-relative mb-50 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={item.delay}
                >
                  <div className="bd-class-thumb">
                    <Image
                      src={item.img}
                      style={{ width: "100%", height: "100%" }}
                      alt="img not found"
                    />
                  </div>
                  <div className="bd-class-content-3 theme-bg-6 ">
                    <h3 className="bd-class-title-3">
                      <Link href={`/class-details/${item.id}`}>
                        {clazz.name}
                      </Link>
                    </h3>
                    <p className="mb-20">{clazz.teaser}</p>
                    <div className="bd-class-meta-wrapper d-flex justify-content-between align-items-center flex-wrap">
                      <div className="bd-class-meta d-flex align-items-center flex-wrap">
                        <div className="bd-class-meta-thumb">
                          <Link href={`/class-details/${item.id}`}>
                            <Image
                              src={item.authorImg}
                              style={{ width: "100%", height: "100%" }}
                              alt="img not found"
                            />
                          </Link>
                        </div>
                        <span>
                          <Link href={`/teacher-details/${instructor.id}`}>
                            {localizedInstructor.name}
                          </Link>
                        </span>
                      </div>
                      <div className="bd-class-meta">
                        <div className="bd-class-meta-price">
                          <span>${item.price}/</span>
                          {enumLabels.priceUnit[item.priceUnit]}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bd-class-btn-3 theme-bg-2 text-center">
                    <Link href={`/class-details/${item.id}`}>{item.btn}</Link>
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

export default ClassPageMain;
