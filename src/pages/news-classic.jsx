import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsClassicPage from "@components/blogs/news-classic-page";
import HeaderFour from "@layout/headers/headerFour";


export default function NewsClassic() {
  return (
    <Wrapper>
      <SEO pageTitle={'News Classic'} />
      <HeaderFour />
      <Breadcrumb title="News Classic" subTitle="News Classic" />
      <NewsClassicPage />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}