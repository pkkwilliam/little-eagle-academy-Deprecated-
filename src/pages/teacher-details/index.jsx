import HomeNewsletter from '@components/newsletter/home-newsletter';
import SEO from '@components/seo';
import TeacherDetailsArea from '@components/teachers/teacher-details-page/teacher-details-area';
import TeacherTimeTable from '@components/teachers/teacher-details-page/teacher-time-table';
import teacher_data from '@data/teacher-data';
import Footer from '@layout/footers/footer';
import HeaderFour from '@layout/headers/headerFour';
import { Wrapper } from '@layout/index';
import React from 'react';

export default function TeacherDetails() {
    const item = teacher_data[0]
    return (
        <Wrapper>
            <SEO pageTitle={'Teacher Details'} />
            <HeaderFour />
            <TeacherDetailsArea item={item} />
            <TeacherTimeTable />
            <HomeNewsletter />
            <Footer />
        </Wrapper>
    );
};