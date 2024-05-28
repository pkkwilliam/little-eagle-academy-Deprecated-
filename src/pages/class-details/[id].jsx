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
import { GET_CLASSES } from "src/middleware/api";
import { getClasses } from "src/middleware/apiDataService";
import execute from "src/middleware/serviceExecutor";
import { store } from "src/redux/store";

export default function ClassDetails({}) {
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
  if (!selectedId) {
    return <h1>Loading...</h1>;
  }
  const clazzDetail =
    classes.find((clazz) => clazz.codeName === selectedId) || {};

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
  //https://api.littleeagleacademy.com/public/reactive/clazz/v1
  // const clazzes = await execute(GET_CLASSES());
  const res = await fetch(
    "https://api.littleeagleacademy.com/public/reactive/clazz/v1"
  );
  const clazzes = await res.json();
  console.log(clazzes);
  const paths = clazzes.map((clazz) => ({
    params: { id: clazz.codeName, clazz },
  }));

  // Return an empty array for dynamic paths, Next.js will generate them at build time
  return {
    paths,
    fallback: "blocking", // Show loading state until data is fetched
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(
    "https://api.littleeagleacademy.com/public/reactive/clazz/v1"
  );
  const clazzes = await res.json();
  const initialClassDetails = clazzes.find((clazz) => clazz.codeName === id);
  return {
    props: { initialClassDetails },
  };
}
