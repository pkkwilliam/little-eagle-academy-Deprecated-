import NewsDetailsArea from '@components/blogs/news-details-page/news-details-area';
import RelatedNews from '@components/blogs/news-details-page/related-news';
import HomeNewsletter from '@components/newsletter/home-newsletter';
import SEO from '@components/seo';
import blog_data from '@data/blog-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function NewsDetails() {

    const router = useRouter();
    const id = router.query.id;
    const [news, setNews] = useState({});


    useEffect(() => {
        if (!id) (<h1>Loading...</h1>)

        else (setNews(blog_data.find(item => item.id == id)))

        return () => {

        };
    }, [id]);

    return (
        <Wrapper>
            <SEO pageTitle={'News Details'} />
            <HeaderFour />
            <NewsDetailsArea item={news} />
            <RelatedNews />
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};