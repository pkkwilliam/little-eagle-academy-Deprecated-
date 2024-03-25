import React from 'react';
import Image from "next/image";
import big_image from "@assets/img/testimonials/big-1.jpg";
import img1 from "@assets/img/testimonials/1.png";
import img2 from "@assets/img/testimonials/2.png";

const testimonial_data = [
    {
        id: 1,
        review: 'Happy Christmas to the whole Kindedo from everyone at Monkton. A big thank you to Kindedo pupil Will who lent his Kindedo to this card.',
        author: 'Norma J. Johnston',
        clrClass: 'theme-bg-6',
        authorImg: img1,
        delay: '.3s',
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
        review: 'Your child will laugh, play and explore at Summer at MLS. From soccer, water play, art, music, theater and science, Shabbat celebrations, cooking.',
        author: 'Mateo D. Daniel',
        clrClass: 'clr-1 theme-bg-7',
        authorImg: img2,
        delay: '.5s',
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'far fa-star' }
        ]
    }
]

const HomeTwoTestimonial = () => {
    return (
        <section className="bd-testimonial-area-2 pb-120 pt-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper z-index-1 p-relative text-center mb-55">
                            <h2 className="bd-section-title mb-0">Parents Says</h2>
                            <p>With the help of teachers and the environment as the third teacher, students<br /> have
                                opportunities to confidently take risks.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-testimonial-thumb-2 wow fadeInLeft p-relative" data-wow-duration="1s"
                            data-wow-delay=".3s">
                            <Image src={big_image} style={{ width: "100%", height: "100%" }} alt="img not found" />
                            <div className="panel wow"></div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="bd-testimonial-2-wrap">
                            {testimonial_data.map((item) => (
                                <div className={`bd-testimonial-2 mb-25 wow fadeInUp ${item.clrClass ? item.clrClass : ''}`} data-wow-duration="1s" 
                                data-wow-delay={item.delay} key={item.id}>
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeTwoTestimonial;