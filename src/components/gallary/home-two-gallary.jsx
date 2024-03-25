import React, { useState } from 'react';
import { Scrollbar, A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Image from 'next/image';
import gallary_data from '@data/gallary-data';
import ImageLightBox from '@components/common/modals/image-lightbox';

const HomeTwoGallary = () => {
    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(null);
    // image open state
    const [open, setOpen] = useState(false);
    // handleImagePopup
    const handleImagePopup = (index) => {
        setPhotoIndex(index);
        setOpen(true);
    };
    //  images
    const images = gallary_data.map((item) => item.img.src);

    return (
        <>
            <section className="bd-gallery-area p-relative pt-120 pb-60 theme-bg-6 p-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="bd-section-title-wrapper mb-55 text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <h2 className="bd-section-title mb-0">See our gallery</h2>
                                <p>It is our goal to provide age appropriate opportuniy for every child enrolled in Kindedo Kids
                                    Club enrichment classes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-gallery-active wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
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
                                            delay: 3000,
                                            disableOnInteraction: true
                                        }}
                                        pagination={{
                                            clickable: true,
                                            el: '.bd-gallery-pagination',
                                        }}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                            },
                                            992: {
                                                slidesPerView: 3,
                                            },
                                            1200: {
                                                slidesPerView: 4,
                                            }
                                        }}
                                    >
                                        {gallary_data.slice(0, 5).map((item, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="bd-gallery">
                                                        <div className="bd-gallery-thumb-wrapper">
                                                            <div className="bd-gallery-thumb">
                                                                <Image src={item.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                            </div>
                                                            <div className="bd-gallery-icon">
                                                                <a onClick={() => handleImagePopup(index)} className="popup-image"><i className="flaticon-eye"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                            <div className="bd-gallery-pagination bd-dots-pagination fill-pagination wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s"></div>
                        </div>
                    </div>
                </div>
            </section>
            <ImageLightBox
                images={images}
                open={open}
                setOpen={setOpen}
                photoIndex={photoIndex}
                setPhotoIndex={setPhotoIndex}
            />
        </>
    );
};

export default HomeTwoGallary;