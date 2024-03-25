import React from 'react';

const TeacherSkills = () => {
    return (
        <div className="col-lg-6 mb-50">
            <div className="bd-teacher-widget theme-bg-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                <div className="bd-teacher-widget-content">
                    <h4 className="bd-teacher-widget-title-2 mb-25">My Skills :</h4>
                    <div className="bd-teacher-skill-wrap">
                        <div className="bd-teacher-skill mb-30">
                            <div className="bd-teacher-skill-content">
                                <span>Preschool Education</span>
                                <span>97%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '97%' }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="bd-teacher-skill mb-30">
                            <div className="bd-teacher-skill-content">
                                <span>Physical Education</span>
                                <span>87%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '87%' }} aria-valuenow="87" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="bd-teacher-skill mb-30">
                            <div className="bd-teacher-skill-content">
                                <span>Manner Education</span>
                                <span>95%</span>
                            </div>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherSkills;