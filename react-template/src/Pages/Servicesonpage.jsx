import React from "react";
import { Link } from "react-router-dom";
import AbrahamSpa from "../ComponentsOfServices/AbrahamSpa";
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
          <BeardTrim
              src="assets/images/sp1.jpg"
              head1="HAIRCUTS"
              para="Sed ut perspiciatis undert sed omnis natus error ."
            />
            <BeardTrim
              src="assets/images/sp2.jpg"
              head1="SHAVES"
              para="Sed ut perspiciatis undert sed omnis natus error ."
            />

            <BeardTrim
              src="assets/images/sp3.jpg"
              head1="BEARD TRIM"
              para="Sed ut perspiciatis undert sed omnis natus error ."
            />
            <BeardTrim
              src="assets/images/sp4.jpg"
              head1="MUSTACHE TRIM"
              para="Sed ut perspiciatis undert sed omnis natus error ."
            />
          </div>
        </div>
      </section>

      <section class="testimonials py-5" id="testimonials">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
          <div class="row mt-3">
            <div className="col-md-4 test-grid text-left px-lg-3">
              <AbrahamSpa
                para="Lorem Ipsum has been the industry's standard since the 1500s.
            Praesent ullamcorper dui turpis."
                src="assets/images/test1.jpg"
                head=" Abraham Smith"
              />
            </div>
            <div class="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
            <AbrahamSpa 
            para="Lorem Ipsum has been the industry's standard since the 1500s.
            Praesent ullamcorper dui turpis."
            src="assets/images/test2.jpg"
            head=" Mariana Noe"
            />
            </div>
            <div class="col-md-4 test-grid text-left px-lg-3">
            <AbrahamSpa 
            para="Lorem Ipsum has been the industry's standard since the 1500s.
            Praesent ullamcorper dui turpis."
            src="assets/images/test3.jpg"
            head="Nebula Nairobi"
            />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicesonpage;
