import Link from 'next/link';
import React from 'react';

const categories = [
    {
        id: 1,
        title: '2-4',
        teaser: 'Years',
        delay: '.4s',
    },
    {
        id: 2,
        title: '4-6',
        teaser: 'Years',
        delay: '.5s',
    },
    {
        id: 3,
        title: '6-8',
        teaser: 'Years',
        delay: '.6s',
    },
    {
        id: 4,
        title: '8-12',
        teaser: 'Years',
        delay: '.7s',
    }
]

const HomeThreeCategories = () => {
    return (
        <section className="bd-shop-cat-area pt-120 pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <div className="bd-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-duration="1s"
                            data-wow-delay=".2s">
                            <h2 className="bd-section-title mb-0">Shop By Age</h2>
                            <p>Our multi-level kindergarten programs cater to the age group of 2-12 years<br /> with a curriculum
                                focussing children.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {categories.map((item) => (
                        <div className="col-lg-3 col-md-6 col-6" key={item.id}>
                            <div className="bd-shop-cat-wrap mb-30 wow fadeInUp" data-wow-duration="1s" data-wow-delay={item.delay}>
                                <Link href="/shop">
                                    <div className="bd-shop-cat">
                                        <div className="bd-shop-cat-content">
                                            <div className="bd-shop-cat-title cat-1">
                                                <h4>{item.title}</h4>
                                            </div>
                                            <span>{item.teaser}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeThreeCategories;