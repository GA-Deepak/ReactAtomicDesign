import React from "react";
import { Link } from "react-router-dom";
import AbrahamSpa from "../ComponentsOfServices/AbrahamSpa";
import Haircuts from "../ComponentsOfServices/Haircuts";
import MarianaSpa from "../ComponentsOfServices/MarianaSpa";
import MushTrim from "../ComponentsOfServices/Mushtachtrim";
import Nebula from "../ComponentsOfServices/Nebula";
import Shaves from "../ComponentsOfServices/Shaves";
import BeardTrim from "./../ComponentsOfServices/BeardTrim";
const Servicesonpage = () => {
  return (
    <div>
      <section class="inner-page-banner" id="home"></section>

      <div class="breadcrumb-agile">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Services
          </li>
        </ol>
      </div>

      <section class="what-we-do py-5">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">Our Stylings</h3>
          <div class="row what-we-do-grid">
            <Haircuts />
            <Shaves />

            <BeardTrim />
            <MushTrim />
          </div>
        </div>
      </section>

      <section class="testimonials py-5" id="testimonials">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
          <div class="row mt-3">
            <AbrahamSpa/>
            <MarianaSpa/>
            <Nebula/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicesonpage;
