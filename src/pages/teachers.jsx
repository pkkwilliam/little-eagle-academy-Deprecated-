import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import TeacherPageMain from "@components/teachers/teacher-page-main";
import HeaderFour from "@layout/headers/headerFour";


export default function Teachers() {
  return (
    <Wrapper>
      <SEO pageTitle={'Teachers'} />
      <HeaderFour />
      <Breadcrumb title="Teachers" subTitle="Teachers" />
      <TeacherPageMain />
      <HomeNewsletter />
      <Footer/>
    </Wrapper>
  )
}