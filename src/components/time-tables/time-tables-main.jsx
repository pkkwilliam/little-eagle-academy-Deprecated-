import React from 'react';

const TimeTablesMain = () => {
    return (
        <section className="bd-routine-2-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="bd-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                                data-wow-delay=".3s">
                                <h2 className="bd-section-title mb-0">All Classes Time Table</h2>
                                <p>Our multi-level kindergarten programs cater to the age group of 2-5 years<br /> with a
                                    curriculum focussing children.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bd-routine-2-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-routine-2-nav">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="all-class-tab" data-bs-toggle="tab"
                                            data-bs-target="#all-class" type="button" role="tab" aria-controls="all-class"
                                            aria-selected="true">All Class</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="sports-class-tab" data-bs-toggle="tab"
                                            data-bs-target="#sports-class" type="button" role="tab" aria-controls="sports-class"
                                            aria-selected="false">Sports Classs</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="dancing-class-tab" data-bs-toggle="tab"
                                            data-bs-target="#dancing-class" type="button" role="tab" aria-controls="dancing-class"
                                            aria-selected="false">Dancing Class</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="drawing-tab" data-bs-toggle="tab" data-bs-target="#drawing"
                                            type="button" role="tab" aria-controls="drawing" aria-selected="false">Drawing Class</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="all-class" role="tabpanel"
                                    aria-labelledby="all-class-tab">
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
                                                        <td className="clr-2">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-6">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-3">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-6">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                        <td className="clr-3">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                        <td className="clr-6">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-1">
                                                            10:00am - 10:30am
                                                            <span>Sports</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            10:00am - 10:30am
                                                            <span>Sports</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            10:00am - 10:30am
                                                            <span>Sports</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            10:00am - 10:30am
                                                            <span>Sports</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            10:00am - 10:30am
                                                            <span>Sports</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            10:00am - 10:30am
                                                            <span>Sports</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-3">
                                                            11:00am - 11:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            11:00am - 11:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-6">
                                                            11:00am - 11:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            11:00am - 11:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            11:00am - 11:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            11:00am - 11:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-1">
                                                            12:00pm - 12:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-6">
                                                            12:00pm - 12:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            12:00pm - 12:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            12:00pm - 12:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-3">
                                                            12:00pm - 12:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            12:00pm - 12:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-1">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
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
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Math Class</span>
                                                        <span>10:00am - 10:30am </span>
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
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Math Class</span>
                                                        <span>10:00am - 10:30am </span>
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
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Math Class</span>
                                                        <span>10:00am - 10:30am </span>
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
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Math Class</span>
                                                        <span>10:00am - 10:30am </span>
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
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Math Class</span>
                                                        <span>10:00am - 10:30am </span>
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
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                    <li>
                                                        <span className="class-title">Math Class</span>
                                                        <span>10:00am - 10:30am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="sports-class" role="tabpanel" aria-labelledby="sports-class-tab">
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
                                                        <td className="clr-3">
                                                            8:00am - 8:30am
                                                            <span>Sports Class</span>
                                                        </td>
                                                        <td className="clr-6">
                                                            8:00am - 8:30am
                                                            <span>Sports Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            8:00am - 8:30am
                                                            <span>Sports Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            8:00am - 8:30am
                                                            <span>Sports Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-6">
                                                            9:00am - 9:30am
                                                            <span>Danceing Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-2">
                                                            9:00am - 9:30am
                                                            <span>Danceing Class</span>
                                                        </td>
                                                        <td className="clr-5">

                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-6">
                                                            9:00am - 9:30am
                                                            <span>Danceing Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-3">
                                                            10:00am - 10:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            10:00am - 10:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-2">
                                                            10:00am - 10:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-3">
                                                            11:00am - 11:30am
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            11:00am - 11:30am
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-1">
                                                            11:00am - 11:30am
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            11:00am - 11:30am
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-6">
                                                            12:00pm - 12:30pm
                                                            <span>Play Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            12:00pm - 12:30pm
                                                            <span>Play Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-3">
                                                            12:00pm - 12:30pm
                                                            <span>Play Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            12:00pm - 12:30pm
                                                            <span>Play Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-1">
                                                            1:00pm - 1:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-1">
                                                            1:00pm - 1:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            1:00pm - 1:30pm
                                                            <span>Lunch Break</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-4">
                                                        </td>
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
                                <div className="tab-pane fade" id="dancing-class" role="tabpanel"
                                    aria-labelledby="dancing-class-tab">
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
                                                        <td className="clr-6">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            8:00am - 8:30am
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-6">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-3">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                        <td className="clr-5">

                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-6">
                                                            9:00am - 9:30am
                                                            <span>Dancing Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-2">
                                                            10:00am - 10:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            10:00am - 10:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-1">
                                                            10:00am - 10:30am
                                                            <span>Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-3">
                                                            11:00am - 11:30am
                                                            <span> Sports Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            11:00am - 11:30am
                                                            <span> Sports Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-1">
                                                            11:00am - 11:30am
                                                            <span> Sports Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            11:00am - 11:30am
                                                            <span> Sports Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-6">
                                                            12:00pm - 12:30pm
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            12:00pm - 12:30pm
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-3">
                                                            12:00pm - 12:30pm
                                                            <span> Play Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            12:00pm - 12:30pm
                                                            <span> Play Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-1">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-8">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            1:00pm - 1:30pm
                                                            <span>Math Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-4">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="bd-routine-list-wrap d-md-none">
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Monday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Tuesday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Wednesday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Thursday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Friday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Saturday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Dance Class</span>
                                                        <span>8:30am - 9:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="drawing" role="tabpanel" aria-labelledby="drawing-tab">
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
                                                        <td className="clr-3">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-6">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-1">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-6">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-2">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-5">

                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-6">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-1">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-8">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-3">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-2">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-3">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-1">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-3">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-6">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-2">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-4"></td>
                                                        <td className="clr-3">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="clr-1">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-8">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-7">
                                                            8:00am - 8:30am
                                                            <span> Drawing Class</span>
                                                        </td>
                                                        <td className="clr-5"></td>
                                                        <td className="clr-4">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="bd-routine-list-wrap d-md-none">
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Monday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Tuesday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Wednesday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Thursday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Friday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bd-routine-list">
                                                <h4 className="bd-routine-day">Saturday</h4>
                                                <ul>
                                                    <li>
                                                        <span className="class-title">Drawing Class</span>
                                                        <span>9:30am - 10:00am </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
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

export default TimeTablesMain;