import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import ForgotArea from "@components/login-register/forgot-area";
import HomeNewsletter from "@components/newsletter/home-newsletter";


export default function forgotPassword() {
  return (
    <Wrapper>
      <SEO pageTitle={'Forgot Password'} />
      <HeaderFour />
      <Breadcrumb title="Forgot Password" subTitle="Forgot Password" />
      <ForgotArea/>
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}