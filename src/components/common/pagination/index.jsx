import React from 'react';

const Pagination_Data = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="bd-pagination pt-20 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                    <ul className="justify-content-center">
                        <li><span aria-current="page" className="page-numbers current">01</span></li>
                        <li><a className="page-numbers" href="#">02</a></li>
                        <li><a className="next page-numbers" href="#"><i className="fa-sharp fa-solid fa-angle-right"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Pagination_Data;