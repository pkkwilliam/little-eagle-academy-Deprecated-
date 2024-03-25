import { Header, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ShopPageMain from "@components/shop/shop-page-main";
import HeaderFour from "@layout/headers/headerFour";


export default function Shop() {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop'} />
      <HeaderFour />
      <Breadcrumb title="Shop" subTitle="Shop" />
      <ShopPageMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}