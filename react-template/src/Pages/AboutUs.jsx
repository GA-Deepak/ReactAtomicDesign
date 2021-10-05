import React from "react";
import ClintSpa from "../ComponentsOfAboutus/ClintSpa";
import DeenSpa from "../ComponentsOfAboutus/DeenSpa";
import JamesSpa from "../ComponentsOfAboutus/JamesSpa";
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
            <JamesSpa />
            <DeenSpa />
            <ClintSpa />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
