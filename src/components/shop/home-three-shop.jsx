import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct, selectProducts } from 'src/redux/features/product-slice';
import { add_to_wishlist } from 'src/redux/features/wishlist-slice';
import { cart_product } from 'src/redux/features/cart-slice';
import product_data from '@data/product-data';
import ShopModal from '@components/common/shop-filtering/shop-model';

const HomeThreeShop = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <>
            <section className="bd-product-area pt-120 pb-120 theme-bg-11">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-8 col-lg-7">
                            <div className="bd-section-title-wrapper text-center text-lg-start mb-55 wow fadeInLeft"
                                data-wow-duration="1s" data-wow-delay=".2s">
                                <h2 className="bd-section-title mb-0">Latest Products</h2>
                                <p>Set your kids up for success with these back-to-school must-haves. Perfect for preschoolers,
                                    kindergarteners, and those in first grade.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="bd-product-filter-btn-wrapper d-flex justify-content-center justify-content-lg-end mb-55 wow fadeInRight"
                                data-wow-duration="1s" data-wow-delay=".2s">
                                <div className="bd-product-filter-btn bd-filter-btn">
                                    <nav>
                                        <div className="nav" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">All</button>
                                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Trending</button>
                                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">New</button>
                                            <button className="nav-link" id="nav-sale-tab" data-bs-toggle="tab" data-bs-target="#nav-sale" type="button" role="tab" aria-controls="nav-sale" aria-selected="false">Sale</button>
                                            <button className="nav-link" id="nav-sold-tab" data-bs-toggle="tab" data-bs-target="#nav-sold" type="button" role="tab" aria-controls="nav-sold" aria-selected="false">Sold</button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                            <div className="row grid">
                                {product_data.slice(0, 6).map((item) => (
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.id}>
                                        <div className="bd-product mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div className="bd-product-thumb-wrapper">
                                                <div className="bd-product-thumb bd-product-thumb-active">
                                                    <div className='bd-h-full'>
                                                        <Swiper
                                                            modules={[Scrollbar, A11y, Pagination]}
                                                            spaceBetween={0}
                                                            loop={false}
                                                            observeParents={true}
                                                            observer={true}
                                                            speed={1000}
                                                            grabCursor={true}
                                                            pagination={{
                                                                clickable: true,
                                                                el: '.bd-product-thumb-pagination',
                                                            }}
                                                            breakpoints={{
                                                                320: {
                                                                    slidesPerView: 1,
                                                                }
                                                            }}
                                                        >
                                                            {item.images.map((image, index) => {
                                                                return (
                                                                    <SwiperSlide key={index}>
                                                                        <div className="bd-single-thumb">
                                                                            <Image src={image.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                                        </div>
                                                                    </SwiperSlide>
                                                                )
                                                            })}
                                                        </Swiper>
                                                    </div>
                                                </div>
                                                <div className="bd-product-tag">
                                                    {item.sale && <span className="theme-bg">{item.badge}</span>}
                                                    {item.new && <span className="theme-bg">{item.badge}</span>}
                                                    {item.sold && <span className="grey-bg">{item.badge}</span>}
                                                    {item.hot && <span className="theme-bg-3">{item.badge}</span>}
                                                </div>
                                                <div className="bd-product-action-wrapper">
                                                    <div className="bd-product-action-item">
                                                        <button type='button' onClick={() => dispatch(add_to_wishlist(item))}><i className="fa-regular fa-heart"></i></button>
                                                    </div>
                                                    <div className="bd-product-action-item">
                                                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => dispatch(getSingleProduct(item))}>
                                                            <i className="fa-regular fa-eye"></i>
                                                        </button>
                                                    </div>
                                                    <div className="bd-product-action-item">
                                                        <button type='button' onClick={() => dispatch(cart_product(item))}><i className="fa-regular fa-cart-shopping"></i></button>
                                                    </div>
                                                </div>
                                                <div className="bd-dots-pagination bd-product-thumb-pagination"></div>
                                            </div>
                                            <div className="bd-product-content">
                                                <h4 className="bd-product-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                <div className="bd-product-rating">
                                                    {item.ratings.map((rating) => (
                                                        <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                                    ))}
                                                </div>
                                                <div className="bd-product-price">
                                                    <span>${item.price}</span>
                                                    {item.discount && <del>${item.discount}</del>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                            <div className="row grid">
                                {product_data.slice(0, 6).map((item) => (
                                    item.hot ?
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.id}>
                                            <div className="bd-product mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <div className="bd-product-thumb-wrapper">
                                                    <div className="bd-product-thumb bd-product-thumb-active">
                                                        <div className='bd-h-full'>
                                                            <Swiper
                                                                modules={[Scrollbar, A11y, Pagination]}
                                                                spaceBetween={0}
                                                                loop={false}
                                                                observeParents={true}
                                                                observer={true}
                                                                speed={1000}
                                                                grabCursor={true}
                                                                pagination={{
                                                                    clickable: true,
                                                                    el: '.bd-product-thumb-pagination',
                                                                }}
                                                                breakpoints={{
                                                                    320: {
                                                                        slidesPerView: 1,
                                                                    }
                                                                }}
                                                            >
                                                                {item.images.map((image, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <div className="bd-single-thumb">
                                                                                <Image src={image.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    <div className="bd-product-tag">
                                                        {item.sale && <span className="theme-bg">{item.badge}</span>}
                                                        {item.new && <span className="theme-bg">{item.badge}</span>}
                                                        {item.sold && <span className="grey-bg">{item.badge}</span>}
                                                        {item.hot && <span className="theme-bg-3">{item.badge}</span>}
                                                    </div>
                                                    <div className="bd-product-action-wrapper">
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(add_to_wishlist(item))}><i className="fa-regular fa-heart"></i></button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => dispatch(getSingleProduct(item))}>
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(cart_product(item))}><i className="fa-regular fa-cart-shopping"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="bd-dots-pagination bd-product-thumb-pagination"></div>
                                                </div>
                                                <div className="bd-product-content">
                                                    <h4 className="bd-product-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                    <div className="bd-product-rating">
                                                        {item.ratings.map((rating) => (
                                                            <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                                        ))}
                                                    </div>
                                                    <div className="bd-product-price">
                                                        <span>${item.price}</span>
                                                        {item.discount && <del>${item.discount}</del>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
                            <div className="row grid">
                                {product_data.slice(0, 6).map((item) => (
                                    item.new ?
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.id}>
                                            <div className="bd-product mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <div className="bd-product-thumb-wrapper">
                                                    <div className="bd-product-thumb bd-product-thumb-active">
                                                        <div className='bd-h-full'>
                                                            <Swiper
                                                                modules={[Scrollbar, A11y, Pagination]}
                                                                spaceBetween={0}
                                                                loop={false}
                                                                observeParents={true}
                                                                observer={true}
                                                                speed={1000}
                                                                grabCursor={true}
                                                                pagination={{
                                                                    clickable: true,
                                                                    el: '.bd-product-thumb-pagination',
                                                                }}
                                                                breakpoints={{
                                                                    320: {
                                                                        slidesPerView: 1,
                                                                    }
                                                                }}
                                                            >
                                                                {item.images.map((image, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <div className="bd-single-thumb">
                                                                                <Image src={image.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    <div className="bd-product-tag">
                                                        {item.sale && <span className="theme-bg">{item.badge}</span>}
                                                        {item.new && <span className="theme-bg">{item.badge}</span>}
                                                        {item.sold && <span className="grey-bg">{item.badge}</span>}
                                                        {item.hot && <span className="theme-bg-3">{item.badge}</span>}
                                                    </div>
                                                    <div className="bd-product-action-wrapper">
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(add_to_wishlist(item))}><i className="fa-regular fa-heart"></i></button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => dispatch(getSingleProduct(item))}>
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(cart_product(item))}><i className="fa-regular fa-cart-shopping"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="bd-dots-pagination bd-product-thumb-pagination"></div>
                                                </div>
                                                <div className="bd-product-content">
                                                    <h4 className="bd-product-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                    <div className="bd-product-rating">
                                                        {item.ratings.map((rating) => (
                                                            <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                                        ))}
                                                    </div>
                                                    <div className="bd-product-price">
                                                        <span>${item.price}</span>
                                                        {item.discount && <del>${item.discount}</del>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-sale" role="tabpanel" aria-labelledby="nav-sale-tab" tabIndex="0">
                            <div className="row grid">
                                {product_data.slice(0, 6).map((item) => (
                                    item.sale ?
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.id}>
                                            <div className="bd-product mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <div className="bd-product-thumb-wrapper">
                                                    <div className="bd-product-thumb bd-product-thumb-active">
                                                        <div className='bd-h-full'>
                                                            <Swiper
                                                                modules={[Scrollbar, A11y, Pagination]}
                                                                spaceBetween={0}
                                                                loop={false}
                                                                observeParents={true}
                                                                observer={true}
                                                                speed={1000}
                                                                grabCursor={true}
                                                                pagination={{
                                                                    clickable: true,
                                                                    el: '.bd-product-thumb-pagination',
                                                                }}
                                                                breakpoints={{
                                                                    320: {
                                                                        slidesPerView: 1,
                                                                    }
                                                                }}
                                                            >
                                                                {item.images.map((image, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <div className="bd-single-thumb">
                                                                                <Image src={image.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    <div className="bd-product-tag">
                                                        {item.sale && <span className="theme-bg">{item.badge}</span>}
                                                        {item.new && <span className="theme-bg">{item.badge}</span>}
                                                        {item.sold && <span className="grey-bg">{item.badge}</span>}
                                                        {item.hot && <span className="theme-bg-3">{item.badge}</span>}
                                                    </div>
                                                    <div className="bd-product-action-wrapper">
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(add_to_wishlist(item))}><i className="fa-regular fa-heart"></i></button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => dispatch(getSingleProduct(item))}>
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(cart_product(item))}><i className="fa-regular fa-cart-shopping"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="bd-dots-pagination bd-product-thumb-pagination"></div>
                                                </div>
                                                <div className="bd-product-content">
                                                    <h4 className="bd-product-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                    <div className="bd-product-rating">
                                                        {item.ratings.map((rating) => (
                                                            <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                                        ))}
                                                    </div>
                                                    <div className="bd-product-price">
                                                        <span>${item.price}</span>
                                                        {item.discount && <del>${item.discount}</del>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-sold" role="tabpanel" aria-labelledby="nav-sold-tab" tabIndex="0">
                            <div className="row grid">
                                {product_data.slice(0, 6).map((item) => (
                                    item.sold ?
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.id}>
                                            <div className="bd-product mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <div className="bd-product-thumb-wrapper">
                                                    <div className="bd-product-thumb bd-product-thumb-active">
                                                        <div className='bd-h-full'>
                                                            <Swiper
                                                                modules={[Scrollbar, A11y, Pagination]}
                                                                spaceBetween={0}
                                                                loop={false}
                                                                observeParents={true}
                                                                observer={true}
                                                                speed={1000}
                                                                grabCursor={true}
                                                                pagination={{
                                                                    clickable: true,
                                                                    el: '.bd-product-thumb-pagination',
                                                                }}
                                                                breakpoints={{
                                                                    320: {
                                                                        slidesPerView: 1,
                                                                    }
                                                                }}
                                                            >
                                                                {item.images.map((image, index) => {
                                                                    return (
                                                                        <SwiperSlide key={index}>
                                                                            <div className="bd-single-thumb">
                                                                                <Image src={image.img} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                                                            </div>
                                                                        </SwiperSlide>
                                                                    )
                                                                })}
                                                            </Swiper>
                                                        </div>
                                                    </div>
                                                    <div className="bd-product-tag">
                                                        {item.sale && <span className="theme-bg">{item.badge}</span>}
                                                        {item.new && <span className="theme-bg">{item.badge}</span>}
                                                        {item.sold && <span className="grey-bg">{item.badge}</span>}
                                                        {item.hot && <span className="theme-bg-3">{item.badge}</span>}
                                                    </div>
                                                    <div className="bd-product-action-wrapper">
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(add_to_wishlist(item))}><i className="fa-regular fa-heart"></i></button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => dispatch(getSingleProduct(item))}>
                                                                <i className="fa-regular fa-eye"></i>
                                                            </button>
                                                        </div>
                                                        <div className="bd-product-action-item">
                                                            <button type='button' onClick={() => dispatch(cart_product(item))}><i className="fa-regular fa-cart-shopping"></i></button>
                                                        </div>
                                                    </div>
                                                    <div className="bd-dots-pagination bd-product-thumb-pagination"></div>
                                                </div>
                                                <div className="bd-product-content">
                                                    <h4 className="bd-product-title"><Link href={`/shop-details/${item.id}`}>{item.title}</Link></h4>
                                                    <div className="bd-product-rating">
                                                        {item.ratings.map((rating) => (
                                                            <a href="#" key={rating.id}><i className={rating.icon}></i></a>
                                                        ))}
                                                    </div>
                                                    <div className="bd-product-price">
                                                        <span>${item.price}</span>
                                                        {item.discount && <del>${item.discount}</del>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        : ''
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-product-more-btn mt-35 text-center wow fadeInUp" data-wow-duration="1s"
                                data-wow-delay=".3s">
                                <Link href="/shop" className="bd-btn">
                                    <span className="bd-btn-inner">
                                        <span className="bd-btn-normal">View More</span>
                                        <span className="bd-btn-hover">View More</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ShopModal />
        </>
    );
};

export default HomeThreeShop;