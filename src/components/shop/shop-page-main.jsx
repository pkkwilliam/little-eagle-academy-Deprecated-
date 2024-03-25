import product_data from '@data/product-data';
import Link from 'next/link';
import React from 'react';
import { Scrollbar, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Image from 'next/image';
import Pagination_Data from '@components/common/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { cart_product } from 'src/redux/features/cart-slice';
import { add_to_wishlist } from 'src/redux/features/wishlist-slice';
import { getSingleProduct, selectProducts } from 'src/redux/features/product-slice';
import ShopModal from '@components/common/shop-filtering/shop-model';

const ShopPageMain = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    return (
        <>
            <section className="bd-product-area pt-120 pb-120">
                <div className="container">
                    <div className="product-filter-wrapper mb-20 wow fadeInUp" data-wow-delay=".3s">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-5">
                                <div className="items-showing-text mb-15">
                                    <span className="items-showing">20</span> Item On List
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-7">
                                <div className="filter-buttons mb-15">
                                    <div className="dropdown filter-category-btn">
                                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="far fa-list"></i>filter
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className="dropdown-item">
                                                    Featured
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">
                                                    Price: Low to High
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">
                                                    Price: High to Low
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">
                                                    New
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">
                                                    Avg. Rating
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="v-line">|</div>
                                    <div className="dropdown filter-item-btn">
                                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Shop by Age<i className="fal fa-angle-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <button className="dropdown-item">
                                                    0-3 Years
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">
                                                    4-6 Years
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item">
                                                    6-9 Years
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {product_data.map((item) => (
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={item.id}>
                                <div className="bd-product bd-product-2 mb-25 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
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
                    <Pagination_Data />
                </div>
            </section>
            <ShopModal />
        </>
    );
};

export default ShopPageMain;