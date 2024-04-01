import { Wrapper } from "@layout/index";
import SEO from "@components/seo";
import Footer from "@layout/footers/footer";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import Breadcrumb from "@components/common/breadcrumb/breadcrumb";
import ContactFormMain from "@components/contact/contact-form-main";
import ContactInfo from "@components/contact/contact-info";
import HeaderFour from "@layout/headers/headerFour";
import { useSelector } from "react-redux";

export default function Contact() {
  const { languageLabel } = useSelector((state) => state.language);
  const labels = languageLabel?.page ?? {};
  return (
    <Wrapper>
      <SEO pageTitle={"Contact"} />
      <HeaderFour />
      <Breadcrumb title={labels.contact} subTitle={labels.contact} />
      <ContactInfo />
      <ContactFormMain />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
