import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import CheckoutMain from "@components/checkout/checkoutMain";
import HeaderFour from "@layout/headers/headerFour";


export default function Checkout() {
  return (
    <Wrapper>
      <SEO pageTitle={'Checkout'} />
      <HeaderFour />
      <Breadcrumb title="Checkout" subTitle="Checkout" />
      <CheckoutMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}