import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ProgramPageMain from "@components/programs/program-page-main";
import AboutTestimonial from "@components/testimonials/about-testimonial";
import ProgramPromotion from "@components/promotions/program-promotion";
import HeaderFour from "@layout/headers/headerFour";


export default function Programs() {
  return (
    <Wrapper>
      <SEO pageTitle={'Programs'} />
      <HeaderFour />
      <Breadcrumb title="Programs" subTitle="Programs" />
      <ProgramPageMain />
      <AboutTestimonial />
      <ProgramPromotion />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}