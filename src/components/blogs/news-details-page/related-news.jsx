import React from 'react';
import Image from "next/image";
import { Scrollbar, A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import blog_data from '@data/blog-data';
import Link from 'next/link';

const RelatedNews = ({ blog_wrap, blog_date }) => {
    return (
        <section className="bd-blog-area pb-120">
            <div className="container">
                <div className="bd-blog-section-title mb-40">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="bd-section-title-wrapper text-center mb-0 wow fadeInUp" data-wow-duration="1s"
                                data-wow-delay=".2s">
                                <h2 className="bd-section-title mb-0">More Related Blog</h2>
                                <p>It is our goal to provide age appropriate opportuniy for every child enrolled in <br />Kindedo
                                    Kids Club enrichment classes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bd-blog-active swiper-container wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                            <div>
                                <Swiper
                                    modules={[Scrollbar, A11y, Autoplay, Pagination]}
                                    spaceBetween={24}
                                    autoplaydisableoninteraction={"false"}
                                    loop={false}
                                    observeParents={true}
                                    observer={true}
                                    speed={1000}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.bd-blog-pagination',
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                        }
                                    }}
                                >
                                    {blog_data.slice(0, 7).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="bd-blog">
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
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="bd-blog-pagination bd-dots-pagination wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".3s"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RelatedNews;