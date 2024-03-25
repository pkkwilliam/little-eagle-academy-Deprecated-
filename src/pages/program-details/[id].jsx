import HomeNewsletter from '@components/newsletter/home-newsletter';
import ProgramDetailsArea from '@components/programs/program-details-page/program-details-area';
import SEO from '@components/seo';
import program_data from '@data/program-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import { Wrapper } from '@layout/index';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function ProgramDetails() {

    const router = useRouter();
    const id = router.query.id;
    const [program, setProgram] = useState({});

    useEffect(() => {
        if (!id) (<h1>Loading...</h1>)
        else (setProgram(program_data.find(item => item.id == id)))
        return () => {
        };
    }, [id]);

    return (
        <Wrapper>
            <SEO pageTitle={'Program Details'} />
            <HeaderFour />
            <ProgramDetailsArea item={program} />
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};