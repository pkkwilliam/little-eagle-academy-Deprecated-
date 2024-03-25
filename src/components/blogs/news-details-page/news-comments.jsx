import React from 'react';
import Image from "next/image";
import comment from "@assets/img/blog/comment-1.png";

const NewsComments = () => {
    return (
        <div className="bd-blog-comment">
            <h4 className="bd-blog-comment-title mb-30">Comments</h4>
            <ul>
                <li>
                    <div className="bd-blog-comment-box">
                        <div className="bd-blog-comment-info mb-15">
                            <div className="bd-blog-comment-thumb-wrap">
                                <div className="bd-blog-comment-thumb">
                                    <Image src={comment} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                </div>
                                <div className="bd-blog-comment-author">
                                    <h5>Cecelia D.</h5>
                                    <span>27 Oct 2022 at 2:09pm</span>
                                </div>
                            </div>
                            <div className="bd-blog-comment-replay-btn">
                                <a href="#"><i className="flaticon-ui"></i></a>
                            </div>
                        </div>
                        <div className="bd-blog-comment-text">
                            <p>When you join us, whether as a teacher, counselor, or custodian, you’re
                                joining a community of professionals who are passionate about the total
                                success of our scholars. Advance your career. </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default NewsComments;