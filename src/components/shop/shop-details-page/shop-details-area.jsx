import Breadcrumb from '@components/common/breadcrumb/breadcrumb';
import React from 'react';
import ShopFaqs from './shop-faqs';
import Image from "next/image";
import tab_1 from "@assets/img/shop/9.1.jpg";
import tab_2 from "@assets/img/shop/8.1.jpg";
import tab_3 from "@assets/img/shop/8.3.png";
import { cart_product, decrease_quantity } from 'src/redux/features/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
import footer_data from '@data/footer-data';
import Link from 'next/link';


const ShopDetailsArea = ({item}) => {
    const dispatch= useDispatch()
    const {cartProducts} = useSelector(state => state.cart);
    const findProduct = cartProducts.find(i => Number(i?.id) === Number(item?.id))
    const handleChange = (e) => {}
    return (
        <>
            <Breadcrumb title="Shop Details" subTitle="Shop Details" />

            <section className="shop-details-area pt-120 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-6">
                            <div className="product-d-img-tab-wrapper mb-60">
                                <div className="product-d-img-nav">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pro-1-tab" data-bs-toggle="tab"
                                                data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                                                aria-selected="false">
                                                {item.productImg && <Image src={item.productImg} style={{ width: "100%", height: "100%" }} alt="img not found" />}
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pro-2-tab" data-bs-toggle="tab" data-bs-target="#pro-2"
                                                type="button" role="tab" aria-controls="pro-2" aria-selected="true">
                                                <Image src={tab_1} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3"
                                                type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                                                <Image src={tab_2} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pro-4-tab" data-bs-toggle="tab" data-bs-target="#pro-4"
                                                type="button" role="tab" aria-controls="pro-4" aria-selected="false">
                                                <Image src={tab_3} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-d-img-tab">
                                    <div className="tab-content" id="productDetailsTab">
                                        <div className="tab-pane fade active show" id="pro-1" role="tabpanel"
                                            aria-labelledby="pro-1-tab">
                                             {item.productImg && <Image className='active' src={item.productImg} style={{ width: "100%", height: "100%" }} alt="img not found" />}
                                        </div>
                                        <div className="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                                            <Image className='active' src={tab_1} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </div>
                                        <div className="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                                            <Image className='active' src={tab_2} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </div>
                                        <div className="tab-pane fade" id="pro-4" role="tabpanel" aria-labelledby="pro-4-tab">
                                            <Image className='active' src={tab_3} style={{ width: "100%", height: "100%" }} alt="img not found" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-side-info mb-60">
                                <div className="product-category-review">
                                    <div className="product-d-category">Organic, Food</div>
                                    <div className="product-d-review">
                                        <div className="rating">
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="far fa-star"></i></a>
                                        </div>
                                        <span>10 Reviews</span>
                                    </div>
                                </div>
                                <h4 className="product-name">{item.title}</h4>
                                <div className="product-price">
                                    {item?.discount && <span className="price-old">${item?.discount}</span>}
                                    <span className="price-now">${item.price}</span>
                                </div>

                                <p className="mb-30">
                                    Kindedo seemed great for my kindergartener-to-be, a full santa believer. Not so the winter
                                    holiday episode, and {`I'm`} not sure how {`I'm`} going to police. I really happy to see my child there
                                </p>
                                <div className="product-quantity-cart mb-30">
                                    <div className="product-quantity-form">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <button onClick={()=> dispatch(decrease_quantity(item))} className="cart-minus"><i className="far fa-minus"></i></button>
                                            <input className="cart-input" type="text" onChange={handleChange}
                                            value={findProduct?.quantity ? findProduct?.quantity : 0} />
                                            <button className="cart-plus" onClick={()=> dispatch(cart_product(item))}><i className="far fa-plus"></i></button>
                                        </form>
                                    </div>
                                    <Link href="/cart" className="bd-cart-btn"><i className="fas fa-shopping-basket"></i>Add to Cart</Link>
                                </div>
                                <div className="product-d-meta sku mb-10">
                                    <span>SKU:</span>
                                    <span>BO1D0MX8SJ</span>
                                </div>
                                <div className="product-d-meta ockcategories mb-10">
                                    <span>Categories:</span>
                                    <span>Garden, Flower, Leaf</span>
                                </div>
                                <div className="product-d-meta tags mb-10">
                                    <span>Tags:</span>
                                    <span>Vegetable, Flower, Leaf</span>
                                </div>
                                <div className="product-d-meta share mb-10">
                                    <span>Share:</span>
                                    <div className="social-links">
                                        <ul>
                                            {footer_data.description.social_icons.map((item) => (
                                                <li key={item.id}>
                                                    <a target="_blank" href={item.url} rel="noreferrer">
                                                        <i className={item.icon}></i>{item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ShopFaqs />
                </div>
            </section>
        </>
    );
};

export default ShopDetailsArea;