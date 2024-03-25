import React from 'react';
import Image from "next/image";
import img1 from "@assets/img/testimonials/1.png";
import img2 from "@assets/img/testimonials/2.png";
import img3 from "@assets/img/testimonials/3.png";
import img4 from "@assets/img/testimonials/4.png";
import img5 from "@assets/img/testimonials/5.png";
import img6 from "@assets/img/testimonials/6.png";

const testimonial_data = [
    {
        id: 1,
        review: 'From 1873 until 1877, St. Louis stood as the sole representative of free kindergarten work in the country. In 1877, Mrs. Quincy A. Shaw opened two kindergartens in the vicinity of Boston, Mass.',
        author: 'Norma J. Johnston',
        authorImg: img1,
        delay: '.4s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' }
        ]
    },
    {
        id: 2,
        review: 'In the summer of I878, Prof. Felix Adler, of New York, founder of the Society for Ethical Culture, spoke forcibly and effectively at a meeting of influential citizens of San Francisco, urging the.',
        author: 'Hillary H. Morse',
        authorImg: img2,
        delay: '.5s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' }
        ]
    },
    {
        id: 3,
        review: 'Growing work called for growing funds to meet expenses. City councils were petitioned, and the amount of five thousand dollars was granted for two successive years In the next year.',
        author: 'Robert M. Allen',
        authorImg: img3,
        delay: '.6s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'far fa-star' }
        ]
    },
    {
        id: 4,
        review: 'The Milwaukee Mission Kindergarten Association, still in its infancy, was established in i885, and has already under its charge, in its three kindergartens, one hundred and fifty.',
        author: 'John N. McGee',
        authorImg: img4,
        delay: '.7s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' }
        ]
    },
    {
        id: 5,
        review: 'To the question, “What is the apparent influence of the kindergarten upon the children?” comes a deluge of answers, their burden being, without exception, that the effects have been only.',
        author: 'Ines R. Duong',
        authorImg: img5,
        delay: '.8s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'far fa-star' }
        ]
    },
    {
        id: 6,
        review: '“Nearly every trade and art has its place in Froebel’s system, which gives the child the alphabet of them all by calling upon him to master the materials and principles common to.',
        author: 'Lenora C. Rivera',
        authorImg: img6,
        delay: '.9s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' }
        ]
    }
]

const TestimonialPageMain = () => {
    return (
        <section className="bd-testimonial-area pt-120 pb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper z-index-1 p-relative text-center mb-55 wow fadeInUp"
                            data-wow-duration="1s" data-wow-delay=".2s">
                            <h2 className="bd-section-title mb-0">Parents Says</h2>
                            <p>With the help of teachers and the environment as the third teacher, students<br /> have
                                opportunities to confidently take risks.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {testimonial_data.map((item) => (
                        <div className="col-xl-4 col-md-6" key={item.id}>
                            <div className="bd-testimonial-3 mb-40 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                                <div className="bd-testimonial-rating mb-30">
                                    {item.ratings.map((rating) => (
                                        <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                    ))}
                                </div>
                                <div className="bd-testimonial-content-2 mb-35">
                                    <p>{item.review}</p>
                                </div>
                                <div className="bd-testimonial-avatar d-flex align-items-center">
                                    <div className="bd-testimonial-avatar-thumb">
                                        <Image src={item.authorImg} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                    </div>
                                    <h6 className="bd-testimonial-avatar-title-2 mb-0">{item.author}</h6>
                                    <div className="bd-testimonial-quote d-none d-sm-block clr-2">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialPageMain;