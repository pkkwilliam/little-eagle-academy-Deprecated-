import React from 'react';
import bg_1 from "@assets/img/shop/cat-1.png";
import bg_2 from "@assets/img/shop/cat-2.png";
import bg_3 from "@assets/img/shop/cat-3.png";
import bg_4 from "@assets/img/shop/cat-4.png";
import Link from 'next/link';

const product_banner = [
    {
        id: 1,
        bg: bg_1,
        title: 'Kids Toy',
        teaser: 'View Product by Kids Toy',
        btn: 'Shop Now',
        wrap: 'col-lg-7 wow fadeInLeft',
        delay: '.3s',
    },
    {
        id: 2,
        bg: bg_2,
        title: 'New',
        teaser: 'View Product by New Items',
        btn: 'Shop Now',
        wrap: 'col-lg-5 wow fadeInRight',
        delay: '.3s',
    },
    {
        id: 3,
        bg: bg_3,
        title: 'Trending',
        teaser: 'View Product by Trending',
        btn: 'Shop Now',
        wrap: 'col-lg-5 wow fadeInLeft',
        delay: '.3s',
    },
    {
        id: 4,
        bg: bg_4,
        title: 'Accessories',
        teaser: 'View Product by Accessories',
        btn: 'Shop Now',
        wrap: 'col-lg-7 wow fadeInRight',
        delay: '.3s',
    }
]

const HomeThreeBanner = () => {
    return (
        <section className="bd-product-cat-area pb-95">
            <div className="container">
                <div className="row">
                    {product_banner.map((item) => (
                        <div className={item.wrap} key={item.id} data-wow-duration="1s" data-wow-delay={item.delay}>
                            <div className="bd-product-cat cat-xl theme-bg-6 mb-25">
                                <div className="bd-product-cat-content-wrapper">
                                    <div className="bd-product-cat-bg" style={{ backgroundImage: `url(${item.bg.src})`}}></div>
                                    <div className="bd-product-cat-content">
                                        <h4 className="bd-product-cat-title">{item.title}</h4>
                                        <p>{item.teaser}</p>
                                        <div className="bd-product-cat-btn">
                                            <Link href="/shop">{item.btn}</Link>
                                        </div>
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

export default HomeThreeBanner;