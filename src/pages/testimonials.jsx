import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import TestimonialPageMain from "@components/testimonials/testimonial-page-main";
import HeaderFour from "@layout/headers/headerFour";


export default function Testimonials() {
  return (
    <Wrapper>
      <SEO pageTitle={'Testimonials'} />
      <HeaderFour />
      <Breadcrumb title="Testimonials" subTitle="Testimonials" />
      <TestimonialPageMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}