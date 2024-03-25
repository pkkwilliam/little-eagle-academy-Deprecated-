import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import HomeThreeHero from "@components/heros/home-three-hero";
import HomeThreeCategories from "@components/shop/home-three-categories";
import HomeThreeBanner from "@components/banners/home-three-banner";
import HomeThreeAbout from "@components/abouts/home-three-about";
import HomeThreeFeature from "@components/features/home-three-feature";
import HomeBlog from "@components/blogs/home-blog";
import FooterThree from "@layout/footers/footerThree";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import HeaderThree from "@layout/headers/headerThree";
import HomeThreeShop from "@components/shop/home-three-shop";


export default function HomeThree() {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Three'} />
      <HeaderThree/>
      <HomeThreeHero/>
      <HomeThreeCategories/>
      <HomeThreeBanner/>
      <HomeThreeShop/>
      <HomeThreeAbout/>
      <HomeThreeFeature/>
      <HomeBlog blog_wrap="bd-blog-content-2" blog_date="bd-blog-date-2" blog_dot={true} />
      <HomeNewsletter />
      <FooterThree />
    </Wrapper>
  )
}
