import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ErrorPageMain from "@components/error/error-page-main";
import HeaderFour from "@layout/headers/headerFour";


export default function Error() {
  return (
    <Wrapper>
      <SEO pageTitle={'404 Not Found'} />
      <HeaderFour />
      <Breadcrumb title="404 page" subTitle="404 page" />
      <ErrorPageMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}