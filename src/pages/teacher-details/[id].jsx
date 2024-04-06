import HomeNewsletter from "@components/newsletter/home-newsletter";
import SEO from "@components/seo";
import TeacherDetailsArea from "@components/teachers/teacher-details-page/teacher-details-area";
import TeacherTimeTable from "@components/teachers/teacher-details-page/teacher-time-table";
import teacher_data from "@data/teacher-data";
import Footer from "@layout/footers/footer";
import HeaderFour from "@layout/headers/headerFour";
import { Wrapper } from "@layout/index";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getInstructors } from "src/middleware/apiDataService";
import { store } from "src/redux/store";

export default function TeacherDetails() {
  const router = useRouter();
  const id = router.query.id;
  const [instructor, setInstructor] = useState({});

  useEffect(() => {
    if (!id) {
      <h1>Loading...</h1>;
    }
    fetchInstructor();
    return () => {};
  }, [id]);

  const fetchInstructor = async () => {
    const instructrosResult = await getInstructors(store);
    setInstructor(instructrosResult.find((result) => result.id === id));
  };

  return (
    <Wrapper>
      <SEO pageTitle={"Teacher Details"} />
      <HeaderFour />
      <TeacherDetailsArea item={instructor} />
      <TeacherTimeTable />
      <HomeNewsletter />
      <Footer />
    </Wrapper>
  );
}
