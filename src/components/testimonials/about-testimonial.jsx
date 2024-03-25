import React from 'react';
import Image from "next/image";
import wave from "@assets/img/shape/wave-section-break.png";
import img1 from "@assets/img/testimonials/1.png";
import img2 from "@assets/img/testimonials/2.png";
import img3 from "@assets/img/testimonials/3.png";
import { Scrollbar, A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const testimonial_data = [
    {
        id: 1,
        review: "Happy Christmas to the whole Kindedo from everyone at Monkton. A big thank you to Kindedo pupil Will who lent his Kindedo to this card, it's very usefull for children, join kindedo for better future.",
        author: 'Norma J. Johnston',
        clrClass: 'theme-bg-6',
        authorImg: img1,
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
        review: 'Your child will laugh, play and explore at Summer at MLS. From soccer, water play, art, music, theater and science, Shabbat celebrations, cooking, they will love our academy, kindedo is best.',
        author: 'Mateo D. Daniel',
        clrClass: 'clr-3 theme-bg-7',
        authorImg: img2,
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'far fa-star' }
        ]
    },
    {
        id: 1,
        review: "Happy Christmas to the whole Kindedo from everyone at Monkton. A big thank you to Kindedo pupil Will who lent his Kindedo to this card, it's very usefull for children, join kindedo for better future.",
        author: 'Michael M. Mason',
        clrClass: 'theme-bg-6',
        authorImg: img3,
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'fas fa-star' }
        ]
    }
]

const AboutTestimonial = () => {
    return (
        <section className="bd-testimonial-area-2 pb-120 p-relative pt-120 theme-bg">
            <div className="bd-testimonial-bottom-shape">
                <Image src={wave} style={{ width: "100%", height: "100%" }} alt="img not found" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="bd-section-title-wrapper is-white z-index-1 p-relative text-center mb-55 wow fadeInUp"
                            data-wow-duration="1s" data-wow-delay=".3s">
                            <h2 className="bd-section-title mb-0">Parents Says</h2>
                            <p>With the help of teachers and the environment as the third teacher, students<br /> have
                                opportunities to confidently take risks.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="bd-testimonial-active-2 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".5s">
                            <div>
                                <Swiper
                                    modules={[Scrollbar, A11y, Autoplay, Pagination]}
                                    spaceBetween={30}
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
                                        el: '.bd-testimonial-pagination-2',
                                    }}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                        }
                                    }}
                                >
                                    {testimonial_data.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className={`bd-testimonial-2 mr-5 mb-25 ${item.clrClass ? item.clrClass : ''}`}>
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
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="bd-testimonial-pagination-2 bd-dots-pagination justify-content-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTestimonial;