import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsSidebarPage from "@components/blogs/news-sidebar-page";
import HeaderFour from "@layout/headers/headerFour";


export default function NewsSidebar() {
  return (
    <Wrapper>
      <SEO pageTitle={'News With Sidebar'} />
      <HeaderFour />
      <Breadcrumb title="News with Sidebar" subTitle="News with Sidebar" />
      <NewsSidebarPage />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}