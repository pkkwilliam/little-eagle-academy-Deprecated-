import Link from "next/link";
import React from "react";
import ClassCat from "./class-cat";
import ClassDetailsWidget from "./class-details-widget";
import ClassTimeTable from "./class-time-table";
import ClassDetailsWidgetTwo from "./class-details-widget-two";
import Image from "next/image";
import class_img from "@assets/img/class/6.jpg";
import author_img from "@assets/img/program/author-1.png";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import { useSelector } from "react-redux";

const ClassDetailsArea = ({ item }) => {
  const { languageLabel, selectedLanguage } = useSelector(
    (state) => state.language
  );
  const enumLabels = languageLabel?.enum ?? {};
  const labels = languageLabel?.component?.classDetailsArea ?? {};
  const clazz = item;
  const clazzLocalization = item?.localized?.[selectedLanguage] ?? {};
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
                className="bd-class-details-widget-content theme-bg-6 wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <h3 className="bd-class-details-widget-title mb-20">
                  {clazzLocalization.name}
                </h3>
                <p
                  className="mb-25"
                  dangerouslySetInnerHTML={{
                    __html: clazzLocalization.description,
                  }}
                />
                <div className="bd-class-details-author-wrapper mt-35">
                  <div className="bd-class-details-author">
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
                        <Link href={`/teacher-details/${instructor.id}`}>
                          {localizedInstructor.name}
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="bd-class-details-cat">
                    <span>{labels.category}</span>
                    <h5>Kindergarten</h5>
                  </div>
                  <div className="bd-class-details-cat">
                    <span>
                      $
                      {`${labels.pricePerUnit}/${
                        enumLabels?.priceUnit?.[clazz.priceUnit]
                      }`}
                    </span>
                    <h5>${item?.price}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClassCat item={item} />

      <ClassDetailsWidget clazz={clazz} clazzLocalization={clazzLocalization} />

      {/* <ClassTimeTable />

      <ClassDetailsWidgetTwo /> */}
    </>
  );
};

export default ClassDetailsArea;
