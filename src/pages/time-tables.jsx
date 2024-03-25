import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import TimeTablesMain from "@components/time-tables/time-tables-main";
import HeaderFour from "@layout/headers/headerFour";


export default function TimeTables() {
  return (
    <Wrapper>
      <SEO pageTitle={'Time Tables'} />
      <HeaderFour />
      <Breadcrumb title="Time Tables" subTitle="Time Tables" />
      <TimeTablesMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}