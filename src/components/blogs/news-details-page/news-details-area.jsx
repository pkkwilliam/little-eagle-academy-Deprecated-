import React from 'react';
import SidebarNews from '../sidebar-news';
import BlogReplyForm from '@components/forms/blog-reply-form';
import NewsComments from './news-comments';
import NewsTopics from './news-topics';
import Link from 'next/link';
import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import Image from 'next/image';

const NewsDetailsArea = ({item}) => {
    return (
        <>
            <Breadcrumb title="News Details" subTitle="News Details" />
            <section className="bd-blog-details-area pt-120 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bd-blog-details-wrapper mb-60">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="bd-blog-details mb-50 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div className="bd-blog-details-thumb">
                                                {item.img && <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />}
                                            </div>
                                            <div className="bd-blog-details-meta wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <span><i className="fas fa-user"></i> by <Link href="/news">{item.user}</Link></span>
                                                <span><i className="fas fa-calendar-days"></i> {item.date}</span>
                                                <span><i className="fa-solid fa-comment-dots"></i><Link href="/news-details">{item.comments} {item.comments > 1 ? "Comments" : "Comment"}</Link></span>
                                            </div>
                                            <div className="bd-blog-details-content wow fadeInUp" data-wow-duration="1s"
                                                data-wow-delay=".3s">
                                                <h3 className="bd-blog-details-title mt-5 mb-15">{item.title}</h3>
                                                <p>
                                                    As a result, the child should have a reasonable amount of freedom to do as they
                                                    please, while at the same time being wholly immersed in an environment which
                                                    stimulates their senses as well as exercising their creativity. Literally their
                                                    classroom is their world, providing exposure to materials and experiences that
                                                    foster greater intellectual growth.
                                                </p>
                                                <p>So, if you are interested in knowing kindergarten age in Texas, New York, Alaska, or
                                                    other states, well, have a look at the following table, which will help you in
                                                    providing a complete state-wise age guide.</p>
                                            </div>
                                            <div className="bd-blog-details-quote wow fadeInUp" data-wow-duration="1s"
                                                data-wow-delay=".3s">
                                                <blockquote className="bd-blog-quote">
                                                    <div className="bd-blog-quote-icon">
                                                        <i className="flaticon-quote"></i>
                                                    </div>
                                                    <div className="bd-blog-quote-content">
                                                        <p>Always keep a positive mindset, it will improve
                                                            your outlook on the world.</p>
                                                        <span>Roald Dahl</span>
                                                    </div>
                                                </blockquote>
                                            </div>
                                            <p>Home-based daycares have a tradition of giving children a warm, loving and nurturing
                                                environment that is quite similar to the atmosphere that you would find in your own
                                                home. Our advantage is that we also provide the structure that allows your child to
                                                flourish at their fullest potential. </p>
                                            <NewsTopics />
                                            <div className="bd-blog-topic wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <h4 className="bd-blog-topic-title">Conclusion of This Blog</h4>
                                                <p>In the United States of America, different states have a different kindergarten age
                                                    range for kids. If you are wondering about what age to start kindergarten by state,
                                                    well, it is important to note that as many as 32 states require the child to be of
                                                    five years of age by or before September 1 in that academic year. However, around 11
                                                    states have this age cutoff limit before as September 1 to October 15, and
                                                    Connecticut is the only state with January.</p>
                                            </div>
                                            <div className="bd-blog-share d-flex justify-content-between align-items-center flex-wrap wow fadeInUp"
                                                data-wow-duration="1s" data-wow-delay=".3s">
                                                <div className="bd-blog-tag">
                                                    <ul>
                                                        <li><Link href="/news">Children</Link></li>
                                                        <li><Link href="/news">Education</Link></li>
                                                        <li><Link href="/news">Parents</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="bd-blog-social">
                                                    <ul>
                                                        <li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer"><i
                                                            className="fa-brands fa-facebook-f"></i></a></li>
                                                        <li><a target="_blank" href="https://twitter.com/" rel="noreferrer"><i
                                                            className="fa-brands fa-twitter"></i></a></li>
                                                        <li><a target="_blank" href="https://www.youtube.com/" rel="noreferrer"><i
                                                            className="fa-brands fa-youtube"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bd-blog-details-nav wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <div className="bd-blog-details-nav-prev">
                                                    <Link href="/news-details"><i className="fa-regular fa-angle-left"></i></Link>
                                                    <Link href="/news-details">Previous Post</Link>
                                                </div>
                                                <span className="d-none d-md-block"><i className="flaticon-menu"></i></span>
                                                <div className="bd-blog-details-nav-next">
                                                    <Link href="/news-details">Next Post</Link>
                                                    <Link href="/news-details"><i className="fa-regular fa-angle-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bd-blog-comment-wrap theme-bg-6 wow fadeInUp" data-wow-duration="1s"
                                            data-wow-delay=".3s">
                                            <NewsComments />
                                            <div className="bd-comment-form">
                                                <h3 className="bd-contact-form-title mb-25">Leave a replay</h3>
                                                <BlogReplyForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <SidebarNews />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsDetailsArea;