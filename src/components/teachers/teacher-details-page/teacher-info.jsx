import React from 'react';

const TeacherInfo = () => {
    return (
        <div className="col-lg-6 mb-50">
            <div className="bd-teacher-widget theme-bg-6 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="bd-teacher-widget-content">
                    <h4 className="bd-teacher-widget-title-2 mb-15">Personal Info : </h4>
                    <div className="bd-teacher-widget-info-wrap">
                        <div className="bd-teacher-widget-info">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherInfo;