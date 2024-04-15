import HomeBanner from "@components/banners/home-banner";
import ClassDetailsArea from "@components/classes/class-details-page/class-details-area";
import MoreProgrammers from "@components/classes/class-details-page/more-programmers";
import HomeNewsletter from "@components/newsletter/home-newsletter";
import SEO from "@components/seo";
import class_data from "@data/class-data";
import Footer from "@layout/footers/footer";
import HeaderFour from "@layout/headers/headerFour";
import { Wrapper } from "@layout/index";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getClasses } from "src/middleware/apiDataService";
import { store } from "src/redux/store";

export default function ClassDetails() {
  const [selectedId, setSelecteId] = useState(undefined);
  const [classes, setClasses] = useState([]);
  const router = useRouter();
  const id = router.query.id;

  const fetchClasses = async () => {
    const classes = await getClasses(store);
    setClasses(classes);
  };
  useEffect(() => {
    setSelecteId(id);
    fetchClasses();
  }, [id]);

  // useEffect(() => {
  //   if (!id) <h1>Loading...</h1>;
  //   else setClasses(class_data.find((item) => item.id == id));

  //   return () => {};
  // }, [id]);
  const clazzDetail = classes.find((clazz) => clazz.id === selectedId) || {};
  if (!selectedId) {
    return <h1>Loading...</h1>;
  }
  return (
    <Wrapper>
      <SEO pageTitle={"Class Details"} />
      <HeaderFour />
      <ClassDetailsArea item={clazzDetail} />
      {/* <HomeBanner /> */}
      {/* <MoreProgrammers/> */}
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
}

export async function getStaticProps({ params }) {
  console.log("ppp"), params;
  return {
    props: { params: { id: "1" } },
  };
}
