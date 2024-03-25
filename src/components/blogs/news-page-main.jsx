import Pagination_Data from '@components/common/pagination';
import blog_data from '@data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsPageMain = ({ blog_wrap, blog_date }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className="bd-blog-area pt-120 pb-120">
            <div className="container">
                <div className="bd-blog-menu-wrapper">
                    <div className="row align-items-end">
                        <div className="col-xxl-6 col-xl-5 col-lg-4">
                            <div className="bd-blog-search mb-60 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="bd-blog-search-input-label">Search by Keyword</label>
                                    <div className="bd-blog-search-input">
                                        <input type="text" placeholder="Type here..." id="bd-blog-search-input-label" />
                                        <div className="bd-blog-search-submit">
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7 col-lg-8">
                            <div className="bd-blog-cat-menu-wrapper mb-60 wow fadeInRight text-right" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className='bd-blog-cat-menu-wrapper-box'>
                                    <h5 className="bd-blog-cat-title">By Category</h5>
                                    <div className="bd-blog-cat-menu bd-filter-btn">
                                        <nav>
                                            <div className="nav" id="nav-tab" role="tablist">
                                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                                                <button className="nav-link" id="nav-kinder-tab" data-bs-toggle="tab" data-bs-target="#nav-kinder" type="button" role="tab" aria-controls="nav-kinder" aria-selected="true">Kindergarten</button>
                                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Daycare</button>
                                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Preschool</button>
                                                <button className="nav-link" id="nav-sale-tab" data-bs-toggle="tab" data-bs-target="#nav-sale" type="button" role="tab" aria-controls="nav-sale" aria-selected="false">Children</button>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <div className="row grid">
                            {blog_data.slice(0, 9).map((item) => (
                                <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-1 c-3 c-4" key={item.id}>
                                    <div className="bd-blog mb-40 wow fadeInUp">
                                        <Link href={`/news-details/${item.id}`}>
                                            <div className="bd-blog-thumb">
                                                <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                            </div>
                                        </Link>
                                        <div className={`bd-blog-content ${blog_wrap ? blog_wrap : ""}`}>
                                            <div className={`${blog_date ? blog_date : "bd-blog-date"}`}>
                                                <span>{item.date}</span>
                                            </div>
                                            <div className="bd-blog-meta">
                                                <span><i className="fas fa-user"></i> by <Link href="/news">{item.user}</Link></span>
                                                <span><i className="fa-solid fa-comment-dots"></i><Link href={`/news-details/${item.id}`}>{item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link></span>
                                            </div>
                                            <h4 className="bd-blog-title"><Link href={`/news-details/${item.id}`}>{item.title}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-kinder" role="tabpanel" aria-labelledby="nav-kinder-tab" tabIndex="0">
                        <div className="row grid">
                            {blog_data.slice(0, 9).map((item) => (
                                item.kindergarten ?
                                    <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-1 c-3 c-4" key={item.id}>
                                        <div className="bd-blog mb-40 wow fadeInUp">
                                            <Link href={`/news-details/${item.id}`}>
                                                <div className="bd-blog-thumb">
                                                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                </div>
                                            </Link>
                                            <div className={`bd-blog-content ${blog_wrap ? blog_wrap : ""}`}>
                                                <div className={`${blog_date ? blog_date : "bd-blog-date"}`}>
                                                    <span>{item.date}</span>
                                                </div>
                                                <div className="bd-blog-meta">
                                                    <span><i className="fas fa-user"></i> by <Link href="/news">{item.user}</Link></span>
                                                    <span><i className="fa-solid fa-comment-dots"></i><Link href={`/news-details/${item.id}`}>{item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link></span>
                                                </div>
                                                <h4 className="bd-blog-title"><Link href={`/news-details/${item.id}`}>{item.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    : ''
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <div className="row grid">
                            {blog_data.slice(0, 9).map((item) => (
                                item.daycare ?
                                    <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-1 c-3 c-4" key={item.id}>
                                        <div className="bd-blog mb-40 wow fadeInUp">
                                            <Link href={`/news-details/${item.id}`}>
                                                <div className="bd-blog-thumb">
                                                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                </div>
                                            </Link>
                                            <div className={`bd-blog-content ${blog_wrap ? blog_wrap : ""}`}>
                                                <div className={`${blog_date ? blog_date : "bd-blog-date"}`}>
                                                    <span>{item.date}</span>
                                                </div>
                                                <div className="bd-blog-meta">
                                                    <span><i className="fas fa-user"></i> by <Link href="/news">{item.user}</Link></span>
                                                    <span><i className="fa-solid fa-comment-dots"></i><Link href={`/news-details/${item.id}`}>{item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link></span>
                                                </div>
                                                <h4 className="bd-blog-title"><Link href={`/news-details/${item.id}`}>{item.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    : ''
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                        <div className="row grid">
                            {blog_data.slice(0, 9).map((item) => (
                                item.preschool ?
                                    <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-1 c-3 c-4" key={item.id}>
                                        <div className="bd-blog mb-40 wow fadeInUp">
                                            <Link href={`/news-details/${item.id}`}>
                                                <div className="bd-blog-thumb">
                                                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                </div>
                                            </Link>
                                            <div className={`bd-blog-content ${blog_wrap ? blog_wrap : ""}`}>
                                                <div className={`${blog_date ? blog_date : "bd-blog-date"}`}>
                                                    <span>{item.date}</span>
                                                </div>
                                                <div className="bd-blog-meta">
                                                    <span><i className="fas fa-user"></i> by <Link href="/news">{item.user}</Link></span>
                                                    <span><i className="fa-solid fa-comment-dots"></i><Link href={`/news-details/${item.id}`}>{item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link></span>
                                                </div>
                                                <h4 className="bd-blog-title"><Link href={`/news-details/${item.id}`}>{item.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    : ''
                            ))}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-sale" role="tabpanel" aria-labelledby="nav-sale-tab" tabIndex="0">
                        <div className="row grid">
                            {blog_data.slice(0, 9).map((item) => (
                                item.childreen ?
                                    <div className="col-xl-4 col-lg-6 col-md-6 grid-item c-1 c-3 c-4" key={item.id}>
                                        <div className="bd-blog mb-40 wow fadeInUp">
                                            <Link href={`/news-details/${item.id}`}>
                                                <div className="bd-blog-thumb">
                                                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                </div>
                                            </Link>
                                            <div className={`bd-blog-content ${blog_wrap ? blog_wrap : ""}`}>
                                                <div className={`${blog_date ? blog_date : "bd-blog-date"}`}>
                                                    <span>{item.date}</span>
                                                </div>
                                                <div className="bd-blog-meta">
                                                    <span><i className="fas fa-user"></i> by <Link href="/news">{item.user}</Link></span>
                                                    <span><i className="fa-solid fa-comment-dots"></i><Link href={`/news-details/${item.id}`}>{item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link></span>
                                                </div>
                                                <h4 className="bd-blog-title"><Link href={`/news-details/${item.id}`}>{item.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                    : ''
                            ))}
                        </div>
                    </div>
                </div>

                <Pagination_Data />
            </div>
        </section>
    );
};

export default NewsPageMain;