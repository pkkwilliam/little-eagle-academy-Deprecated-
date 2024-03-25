import VideoModal from '@components/common/modals/modal-video';
import useModal from '@hooks/use-modal';
import React from 'react';
import Image from "next/image";
import { Scrollbar, A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import shape from "@assets/img/bg/bg-shape.jpg";
import bg from "@assets/img/bg/testimonail-bg.png";
import img1 from "@assets/img/testimonials/1.png";
import img2 from "@assets/img/testimonials/3.png";
import img3 from "@assets/img/testimonials/2.png";

const testimonial_data = [
    {
        id: 1,
        review: 'Happy Christmas to the whole Kindedo from everyone at Monkton. A big thank you to Kindedo pupil Will who lent his Kindedo to this card.',
        author: 'Norma J. Johnston',
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
        review: 'Your child will laugh, play and explore at Summer at MLS. From soccer, water play, art, music, theater and science, Shabbat celebrations, cooking.',
        author: 'Mateo D. Daniel',
        authorImg: img2,
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
        review: 'The unique Mentone Grammar Community is our point of difference compared to many in the industry. The School often talks about the concept.',
        author: 'Michael M. Mason',
        authorImg: img3,
        ratings: [
            { id: 1, icon: 'fas fa-star' },
            { id: 2, icon: 'fas fa-star' },
            { id: 3, icon: 'fas fa-star' },
            { id: 4, icon: 'fas fa-star' },
            { id: 5, icon: 'far fa-star' }
        ]
    }
]

const HomeTestimonial = () => {
    const { isVideoOpen, setIsVideoOpen } = useModal();
    return (
        <>
            <section className="bd-testimonial-area theme-bg">
                <div className="bd-testimonial-video" style={{ backgroundImage: `url(${bg.src})`}}>
                    <div className="bd-testimonial-video-btn bd-pulse-btn">
                        <button type='button' className="popup-video" onClick={() => setIsVideoOpen(true)}><i className="flaticon-play-button"></i></button>
                    </div>
                </div>
                <div className="bd-testimonial-bg d-none d-lg-block" style={{ backgroundImage: `url(${shape.src})`}}></div>
                <div className="container">
                    <div className="row justify-content-end align-items-center">
                        <div className="col-lg-6">
                            <div className="bd-testimonial-wrapper pt-120 pb-120">
                                <div className="bd-section-title-wrapper is-white mb-20 wow fadeInUp" data-wow-duration="1s"
                                    data-wow-delay=".3s">
                                    <h2 className="bd-section-title mb-0">Parents Says</h2>
                                </div>
                                <div className="bd-testimonial-active wow fadeInUp" data-wow-duration="1s"
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
                                                el: '.bd-testimonial-pagination',
                                            }}
                                            breakpoints={{
                                                320: {
                                                    slidesPerView: 1,
                                                }
                                            }}
                                        >
                                            {testimonial_data.map((item, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className="bd-testimonial">
                                                            <div className="bd-testimonial-rating mb-30">
                                                                {item.ratings.map((rating) => (
                                                                    <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                                                ))}
                                                            </div>
                                                            <div className="bd-testimonial-content mb-55">
                                                                <p>{item.review}</p>
                                                            </div>
                                                            <div className="bd-testimonial-avatar d-flex align-items-center">
                                                                <div className="bd-testimonial-avatar-thumb">
                                                                    <Image src={item.authorImg} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                                </div>
                                                                <h6 className="bd-testimonial-avatar-title mb-0">{item.author}</h6>
                                                                <div className="bd-testimonial-quote">
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
                                <div className="bd-testimonial-pagination bd-dots-pagination justify-content-start wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* video modal start */}
            <VideoModal
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"go7QYaQR494"}
            />
            {/* video modal end */}
        </>
    );
};

export default HomeTestimonial;