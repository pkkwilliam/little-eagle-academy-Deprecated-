import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import NewsPageMain from "@components/blogs/news-page-main";
import HeaderFour from "@layout/headers/headerFour";
import { useSelector } from "react-redux";

export default function NewsSidebar() {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.page ?? {};
  return (
    <Wrapper>
      <SEO pageTitle={"News"} />
      <HeaderFour />
      <Breadcrumb
        title={labels.newsAndEvents}
        subTitle={labels.newsAndEvents}
      />
      <NewsPageMain />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
