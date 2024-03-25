import React from 'react';

const LearningSchedule = () => {
    return (
        <section className="bd-routine-area pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".2s">
                            <h2 className="bd-section-title mb-0">Full Day with Learning</h2>
                            <p>With the help of teachers and the environment as the third teacher, students<br /> have opportunities to confidently take risks.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bd-routine-table mb-50 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Hour</th>
                                        <th scope="col">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>8:00am</td>
                                        <td>Free Play</td>
                                    </tr>
                                    <tr>
                                        <td>8:30am</td>
                                        <td>Sand Pit</td>
                                    </tr>
                                    <tr>
                                        <td>9:00am</td>
                                        <td>Tattoo Corner</td>
                                    </tr>
                                    <tr>
                                        <td>9:30am</td>
                                        <td>Creativity Corner</td>
                                    </tr>
                                    <tr>
                                        <td>10:00am</td>
                                        <td>Food Time</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bd-routine-table mb-50 wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Hour</th>
                                        <th scope="col">Activity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10:30am</td>
                                        <td>Creativity Corner</td>
                                    </tr>
                                    <tr>
                                        <td>11:00am</td>
                                        <td>Food Time</td>
                                    </tr>
                                    <tr>
                                        <td>11:30am</td>
                                        <td>Free Play</td>
                                    </tr>
                                    <tr>
                                        <td>12:00am</td>
                                        <td>Tattoo Corner</td>
                                    </tr>
                                    <tr>
                                        <td>12:30am</td>
                                        <td>Sand Pit</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningSchedule;