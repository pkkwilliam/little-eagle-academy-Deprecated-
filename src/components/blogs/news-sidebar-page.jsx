import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blog_data from '@data/blog-data';
import Pagination_Data from '@components/common/pagination';
import SidebarNews from './sidebar-news';

const NewsSidebarPage = ({blog_wrap, blog_date}) => {
    return (
        <section className="bd-blog-sidebar-area pt-120 pb-60">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="bd-blog-sidebar-wrapper mb-60">
                            <div className="row">
                                {blog_data.slice(0, 8).map((item) => (
                                    <div className="col-lg-6 col-md-6" key={item.id}>
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

export default NewsSidebarPage;