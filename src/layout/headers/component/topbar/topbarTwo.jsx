import React from 'react';

const TopbarTwo = () => {
    return (
        <div className="bd-header-top bd-header-top-2 d-none d-xl-block">
            <div className="bd-header-top-clip-shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bd-header-top-wrapper d-flex justify-content-between">
                            <div className="bd-header-top-left">
                                <div className="bd-header-meta-items-2  d-flex align-items-center">
                                    <div className="bd-header-meta-item is-white d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fa-sharp fa-solid fa-flag"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p>Journey Since 1990</p>
                                        </div>
                                    </div>
                                    <div className="bd-header-meta-item d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p><a href="#">1870 N State St, California, 95482 United States</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bd-header-top-right d-flex align-items-center">
                                <div className="bd-header-meta-items d-flex align-items-center">
                                    <div className="bd-header-meta-item d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p><a href="mailto:support@kindedo.com">support@kindedo.com</a></p>
                                        </div>
                                    </div>
                                    <div className="bd-header-meta-item d-flex align-items-center">
                                        <div className="bd-header-meta-icon">
                                            <i className="fas fa-clock"></i>
                                        </div>
                                        <div className="bd-header-meta-text">
                                            <p>8.00am-4.00pm</p>
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

export default TopbarTwo;