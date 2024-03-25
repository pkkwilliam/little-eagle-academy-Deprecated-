import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactFormMain from "@components/contact/contact-form-main";
import ContactInfo from "@components/contact/contact-info";
import HeaderFour from "@layout/headers/headerFour";


export default function Contact() {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <HeaderFour />
      <Breadcrumb title="Contact Us" subTitle="Contact Us" />
      <ContactInfo />
      <ContactFormMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}