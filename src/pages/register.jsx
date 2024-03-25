import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import RegisterArea from "@components/login-register/register-area";
import HomeNewsletter from "@components/newsletter/home-newsletter";


export default function Register() {
  return (
    <Wrapper>
      <SEO pageTitle={'Register'} />
      <HeaderFour />
      <Breadcrumb title="Register" subTitle="Register" />
      <RegisterArea/>
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}