import React from "react";
import MensSpa from "../ComponentsOfAboutus/MensSpa";
import MoreAbout from "../ComponentsOfAboutus/MoreAboutus";
import StatsCount from "../ComponentsOfAboutus/StatsCount";
const AboutUs = () => {
  return (
    <div>
      <MoreAbout />

      <StatsCount />
      <section class="banner-bottom  py-5">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">Our Team</h3>
          <div class="row mt-lg-5 mt-4">
            <MensSpa name="JAMES Men spa" src="assets/images/t1.jpg" def="Lorem Ipsum has been the industry's standard since the 1500s."/>
            <MensSpa name="DEEN MUSTACHIO" src="assets/images/t2.jpg" def="Lorem Ipsum has been the industry's standard since the 1500s."/>
            <MensSpa name="CLINT Men spa" src="assets/images/t3.jpg" def="Lorem Ipsum has been the industry's standard since the 1500s."/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
