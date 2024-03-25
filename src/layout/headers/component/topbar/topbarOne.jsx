import React from 'react';

const TopbarOne = () => {
    return (
        <div className="theme-bg bd-header-top-3 p-relative d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bd-header-top-wrapper d-flex justify-content-between">
                            <div className="bd-header-top-right d-flex align-items-center">
                                <div className="bd-header-meta-items d-flex align-items-center">
                                    <div className="bd-header-meta-item is-white d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p><a href="mailto:support@kindedo.com">support@kindedo.com</a></p>
                                        </div>
                                    </div>
                                    <div className="bd-header-meta-item is-white d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p>8.00am-4.00pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bd-header-top-left">
                                <div className="bd-header-meta-items">
                                    <div className="bd-header-meta-item is-white d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p><a href="#">14/A, Kilix Home Tower, NYC</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopbarOne;