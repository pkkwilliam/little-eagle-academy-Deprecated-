import React from "react";

const TeacherInfo = ({ localizedInstructor }) => {
  const { personalInfo } = localizedInstructor;

  return (
    <div className="col-lg-12 mb-50">
      <div
        className="bd-teacher-widget theme-bg-6 wow fadeInRight"
        data-wow-duration="1s"
        data-wow-delay=".3s"
      >
        <div className="bd-teacher-widget-content">
          {/* <h4 className="bd-teacher-widget-title-2 mb-15">Personal Info :</h4> */}
          <h3 className="bd-teacher-widget-title">
            {localizedInstructor.name}
          </h3>
          <span className="bd-teacher-widget-tag">
            {localizedInstructor.title}
          </span>
          <div className="bd-teacher-widget-info-wrap">
            <PersonlInfoContent personalInfo={personalInfo} />
            {/* <div className="bd-teacher-widget-info">
                            <p>Email:</p>
                            <p><a href="mailto:annadbrown@kindedo.com">annadbrown@kindedo.com</a></p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>Education:</p>
                            <p>University of California, Los Angeles</p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>Teaching Since:</p>
                            <p>2016</p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>At Clears Since: </p>
                            <p>2018</p>
                        </div>
                        <div className="bd-teacher-widget-info">
                            <p>What I love Most: </p>
                            <p>The Kids with Creative Mind</p>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const PersonlInfoContent = ({ personalInfo }) => {
  return (personalInfo ?? []).map((info, index) => {
    const isFirstRow = index === 0;
    const { key, value } = info;
    const subValues = value.split("||");
    return (
      <div
        className="bd-teacher-widget-info"
        key={key}
        style={{
          display: "flex",
          alignItems: "start",
          paddingTop: isFirstRow ? 0 : 16,
        }}
      >
        <p style={{ fontSize: 20, fontWeight: 600 }}>{`${key}:`}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          {subValues.map((v) => (
            <p dangerouslySetInnerHTML={{ __html: v }} style={{ margin: 0 }} />
          ))}
        </div>
      </div>
    );
  });
};

export default TeacherInfo;
