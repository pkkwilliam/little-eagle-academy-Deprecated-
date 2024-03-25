import ReviewForm from '@components/forms/review-form';
import React from 'react';
import Image from "next/image";
import author_1 from "@assets/img/testimonials/1.png";
import author_2 from "@assets/img/testimonials/2.png";
import author_3 from "@assets/img/testimonials/3.png";

const ShopFaqs = () => {
    return (
        <div className="product_info-faq-area pb-0 pt-20 wow fadeInUp" data-wow-delay=".3s">
            <div className="product-details-tab-wrapper">
                <nav className="product-details-nav mb-30">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="pro-info-1-tab" data-bs-toggle="tab" href="#pro-info-1"
                            role="tab" aria-selected="true">Description</a>
                        <a className="nav-item nav-link" id="pro-info-2-tab" data-bs-toggle="tab" href="#pro-info-2"
                            role="tab" aria-selected="false">Additional Information</a>
                        <a className="nav-item nav-link" id="pro-info-3-tab" data-bs-toggle="tab" href="#pro-info-3"
                            role="tab" aria-selected="false">Reviews (3)</a>
                    </div>
                </nav>
                <div className="product-details-content mb-30">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade active show" id="pro-info-1" role="tabpanel">
                            <div className="tabs-wrapper mt-0">
                                <div className="product__details-des">
                                    <p>
                                        In marketing a product is an object or system made
                                        available for consumer use it is anything that can be
                                        offered to a market to the desire or need of a
                                        \retailing, products are often referred to as
                                        merchandise, and in manufacturing, products are bought
                                        as materials and then sold as finished goods. A
                                        service regarded to as a type of product. Commodities
                                        are usually raw materials metals and agricultural
                                        products, but a commodity can also be anything wide
                                        the open market. In project management, the formal
                                        definition of the project deliverables
                                    </p>
                                    <p className="mb-0">
                                        A product can be classified as tangible or intangible.
                                        A tangible product is a physical object that can be
                                        perceived by touch building, vehicle, gadget, An
                                        intangible product is a product that can only be
                                        perceived indirectly such as an insurance policy. can
                                        be broadly classified under intangible be durable or
                                        non durable. A product line is a group of products
                                        that are closely either because they function in a
                                        similar manner, are sold to the same customergroups.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pro-info-2" role="tabpanel">
                            <div className="tabs-wrapper mt-0">
                                <div className="product__details-info">
                                    <ul>
                                        <li>
                                            <h6>Weight</h6>
                                            <span>2 lbs</span>
                                        </li>
                                        <li>
                                            <h6>Dimensions</h6>
                                            <span>12 × 16 × 19 in</span>
                                        </li>
                                        <li>
                                            <h6>Product</h6>
                                            <span>Purchase this product on rag-bone.com</span>
                                        </li>
                                        <li>
                                            <h6>Color</h6>
                                            <span>Gray, Black</span>
                                        </li>
                                        <li>
                                            <h6>Size</h6>
                                            <span>S, M, L, XL</span>
                                        </li>
                                        <li>
                                            <h6>Model</h6>
                                            <span>Model </span>
                                        </li>
                                        <li>
                                            <h6>Shipping</h6>
                                            <span>Standard shipping: $5,95</span>
                                        </li>
                                        <li>
                                            <h6>Care Info</h6>
                                            <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                                        </li>
                                        <li>
                                            <h6>Brand</h6>
                                            <span>Kazen</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pro-info-3" role="tabpanel">
                            <div className="tabs-wrapper mt-0">
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <a href="#"><Image src={author_1} style={{ width: "100%", height: "100%" }} alt="img not found" /></a>
                                    </div>
                                    <div className="course-review-list">
                                        <h5><a href="#">Sotapdi Kunda</a></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>55 min ago</span>
                                        </div>
                                        <p>
                                            Very clean and organized with easy to follow
                                            tutorials, Exercises, and solutions. This course
                                            does start from the beginning with very little
                                            knowledge and gives a great overview of common tools
                                            used for data science and progresses into more
                                            complex concepts and ideas.
                                        </p>
                                    </div>
                                </div>
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <a href="#"><Image src={author_2} style={{ width: "100%", height: "100%" }} alt="img not found" /></a>
                                    </div>
                                    <div className="course-review-list">
                                        <h5><a href="#">Samantha</a></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>45 min ago</span>
                                        </div>
                                        <p>
                                            The course is good at explaining very basic
                                            intuition of the concepts. It will get you
                                            scratching the surface so to say. where this course
                                            is unique is the implementation methods are so well
                                            defined Thank you to the team !.
                                        </p>
                                    </div>
                                </div>
                                <div className="course-review-item mb-30">
                                    <div className="course-reviews-img">
                                        <a href="#"><Image src={author_3} style={{ width: "100%", height: "100%" }} alt="img not found" /></a>
                                    </div>
                                    <div className="course-review-list">
                                        <h5><a href="#">Michell Mariya</a></h5>
                                        <div className="course-start-icon">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>30 min ago</span>
                                        </div>
                                        <p>
                                            This course is amazing..! I started this course as a
                                            beginner and learnt a lot. Instructors are great.
                                            Query handling can be improved.Overall very happy
                                            with the course.
                                        </p>
                                    </div>
                                </div>
                                <div className="product__details-comment">
                                    <div className="comment-title mb-20">
                                        <h3>Add a review</h3>
                                        <p>
                                            Your email address will not be published. Required
                                            fields are marked *
                                        </p>
                                    </div>
                                    <div className="comment-rating mb-20">
                                        <span>Overall ratings</span>
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fas fa-star"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fal fa-star"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="comment-input-box mb-0">
                                        <ReviewForm />
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

export default ShopFaqs;