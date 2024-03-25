import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import HomeTwoHero from "@components/heros/home-two-hero";
import HomeTwoClass from "@components/classes/home-two-class";
import HomePromotion from "@components/promotions/home-promotion";
import promoImgTwo from "@assets/img/promotion/2.png";
import HomeTwoProgram from "@components/programs/home-two-program";
import HomeAbout from "@components/abouts/home-about";
import HomeBanner from "@components/banners/home-banner";
import HomeTwoTeacher from "@components/teachers/home-two-teacher";
import HomeTwoTestimonial from "@components/testimonials/home-two-testimonial";
import HomeBlog from "@components/blogs/home-blog";
import HomeTwoGallary from "@components/gallary/home-two-gallary";
import FooterTwo from "@layout/footers/footerTwo";
import HeaderTwo from "@layout/headers/headerTwo";


export default function HomeTwo() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Two'} />
      <HeaderTwo/>
      <HomeTwoHero/>
      <HomeTwoClass/>
      <HomePromotion promoImg={promoImgTwo} />
      <HomeTwoProgram />
      <HomeAbout/>
      <HomeTwoTeacher/>
      <HomeTwoTestimonial/>
      <HomeBanner/>
      <HomeBlog blog_wrap="bd-blog-content-2" blog_date="bd-blog-date-2" />
      <HomeTwoGallary />
      <FooterTwo />
    </Wrapper>
  )
}
