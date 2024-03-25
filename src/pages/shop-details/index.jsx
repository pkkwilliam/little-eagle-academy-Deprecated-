import HomeNewsletter from '@components/newsletter/home-newsletter';
import SEO from '@components/seo';
import ShopDetailsArea from '@components/shop/shop-details-page/shop-details-area';
import product_data from '@data/product-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import { Wrapper } from '@layout/index';
import React from 'react';

export default function ShopDetails() {
    const item = product_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={'Shop Details'} />
            <HeaderFour />
            <ShopDetailsArea item={item} />
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};