import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import HeaderFour from "@layout/headers/headerFour";
import LoginArea from "@components/login-register/login-area";
import HomeNewsletter from "@components/newsletter/home-newsletter";


export default function Login() {
  return (
    <Wrapper>
      <SEO pageTitle={'Login'} />
      <HeaderFour />
      <Breadcrumb title="Login" subTitle="Login" />
      <LoginArea />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}