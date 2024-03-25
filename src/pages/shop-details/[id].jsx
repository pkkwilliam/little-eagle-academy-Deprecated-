import HomeNewsletter from '@components/newsletter/home-newsletter';
import SEO from '@components/seo';
import ShopDetailsArea from '@components/shop/shop-details-page/shop-details-area';
import product_data from '@data/product-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function ShopDetails() {

    const router = useRouter();
    const id = router.query.id;
    const [product, setProduct] = useState({});

    useEffect(() => {
        if (!id) (<h1>Loading...</h1>)
        else (setProduct(product_data.find(item => item.id == id)))
        return () => {};
    }, [id]);

    return (
        <Wrapper>
            <SEO pageTitle={'Shop Details'} />
            <HeaderFour />
            <ShopDetailsArea item={product} />
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};