import React from 'react';

const ClassTimeTable = () => {
    return (
        <section className="bd-routine-2-area pb-95">
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="bd-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                                data-wow-delay=".2s">
                                <h2 className="bd-section-title mb-0">Class Time Table Weekly</h2>
                                <p>Our multi-level kindergarten programs cater to the age group of 2-5 years<br /> with a
                                    curriculum
                                    focussing children.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bd-routine-2-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-routine-2">
                                <div className="table-responsive d-none d-md-block">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="clr-4">Sunday</th>
                                                <th scope="col" className="clr-5">Monday</th>
                                                <th scope="col" className="clr-4">Tuesday</th>
                                                <th scope="col" className="clr-5">Wednessday</th>
                                                <th scope="col" className="clr-4">Thursday</th>
                                                <th scope="col" className="clr-5">Friday</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="clr-5"></td>
                                                <td className="clr-1">
                                                    8:00am - 8:30am
                                                    <span> Play Class</span>
                                                </td>
                                                <td className="clr-5"></td>
                                                <td className="clr-4"></td>
                                                <td className="clr-5"></td>
                                                <td className="clr-4"></td>
                                            </tr>
                                            <tr>
                                                <td className="clr-1">
                                                    8:00am - 8:30am
                                                    <span> Play Class</span>
                                                </td>
                                                <td className="clr-5"></td>
                                                <td className="clr-1">
                                                    8:00am - 8:30am
                                                    <span> Play Class</span>
                                                </td>
                                                <td className="clr-4"></td>
                                                <td className="clr-5"></td>
                                                <td className="clr-4"></td>
                                            </tr>
                                            <tr>
                                                <td className="clr-5"></td>
                                                <td className="clr-4">
                                                </td>
                                                <td className="clr-5"></td>
                                                <td className="clr-4"></td>
                                                <td className="clr-1">
                                                    8:00am - 8:30am
                                                    <span> Play Class</span>
                                                </td>
                                                <td className="clr-1">
                                                    8:00am - 8:30am
                                                    <span> Play Class</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="clr-4"></td>
                                                <td className="clr-5"></td>
                                                <td className="clr-4"></td>
                                                <td className="clr-1">
                                                    8:00am - 8:30am
                                                    <span> Play Class</span>
                                                </td>
                                                <td className="clr-4"></td>
                                                <td className="clr-5"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bd-routine-list-wrap d-md-none">
                                    <div className="bd-routine-list">
                                        <h4 className="bd-routine-day">Monday</h4>
                                        <ul>
                                            <li>
                                                <span className="class-title">Sports Class</span>
                                                <span>8:00am - 8:30am </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bd-routine-list">
                                        <h4 className="bd-routine-day">Tuesday</h4>
                                        <ul>
                                            <li>
                                                <span className="class-title">Sports Class</span>
                                                <span>8:00am - 8:30am </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bd-routine-list">
                                        <h4 className="bd-routine-day">Wednesday</h4>
                                        <ul>
                                            <li>
                                                <span className="class-title">Sports Class</span>
                                                <span>8:00am - 8:30am </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bd-routine-list">
                                        <h4 className="bd-routine-day">Thursday</h4>
                                        <ul>
                                            <li>
                                                <span className="class-title">Sports Class</span>
                                                <span>8:00am - 8:30am </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bd-routine-list">
                                        <h4 className="bd-routine-day">Friday</h4>
                                        <ul>
                                            <li>
                                                <span className="class-title">Sports Class</span>
                                                <span>8:00am - 8:30am </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bd-routine-list">
                                        <h4 className="bd-routine-day">Saturday</h4>
                                        <ul>
                                            <li>
                                                <span className="class-title">Sports Class</span>
                                                <span>8:00am - 8:30am </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassTimeTable;