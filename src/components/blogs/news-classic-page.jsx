import React from 'react';
import blog_data from '@data/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import Pagination_Data from '@components/common/pagination';
import SidebarNews from './sidebar-news';

const NewsClassicPage = () => {
    return (
        <section className="bd-blog-sidebar-area pt-120 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="bd-blog-sidebar-wrapper mb-60">
                            <div className="row">
                                {blog_data.slice(0, 4).map((item) => (
                                    <div className="col-12" key={item.id}>
                                        <div className="bd-blog mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <Link href={`/news-details/${item.id}`}>
                                                <div className="bd-blog-thumb bd-blog-thumb-3">
                                                    <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                </div>
                                            </Link>
                                            <div className="bd-blog-meta bd-blog-meta-2">
                                                <span><i className="fas fa-user"></i> by <Link href="/news">{item.user}</Link></span>
                                                <span><i className="fas fa-calendar-days"></i> {item.date}</span>
                                                <span><i className="fa-solid fa-comment-dots"></i><Link href={`/news-details/${item.id}`}>{item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link></span>
                                            </div>
                                            <div className="bd-blog-content-3">
                                                <h4 className="bd-blog-title-2 mt-5 mb-15"><Link href={`/news-details/${item.id}`}>{item.title}</Link></h4>
                                                <p>{item.teaser}</p>
                                                <div className="bd-blog-read-btn mb-15 mt-30">
                                                    <Link href={`/news-details/${item.id}`} className='bd-btn'>
                                                        <span className="bd-btn-inner">
                                                            <span className="bd-btn-normal">Read More</span>
                                                            <span className="bd-btn-hover">Read More</span>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination_Data />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <SidebarNews />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsClassicPage;