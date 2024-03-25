import NewsDetailsArea from '@components/blogs/news-details-page/news-details-area';
import RelatedNews from '@components/blogs/news-details-page/related-news';
import HomeNewsletter from '@components/newsletter/home-newsletter';
import SEO from '@components/seo';
import blog_data from '@data/blog-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import { Wrapper } from '@layout/index';
import React from 'react';

export default function NewsDetails() {
    const item = blog_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={'News Details'} />
            <HeaderFour />
            <NewsDetailsArea item={item} />
            <RelatedNews />
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};