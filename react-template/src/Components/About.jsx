import React from "react";

const About = () => {
  return (
    <div>
      <section class="content-info py-5" id="about">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">About us</h3>

          <div class="info-w3pvt-mid text-center px-lg-5">
            <div class="title-desc text-center px-lg-5">
              <img
                src="assets/images/about1.png"
                alt="news image"
                class="img-fluid"
              />
              <p class="px-lg-5">
                Praesent ullamcorper dui turpis.At vero eos et accusam et justo
                duo dolores et ea rebum.Integer sit amet mattis quam, sit amet
                ultricies velit. Praesent ullamcorper dui turpis. Praesent
                ullamcorper dui turpis.At vero eos et accusam et justo duo
                dolores et ea rebum.Integer sit amet mattis quam, sit amet
                ultricies velit. Praesent ullamcorper dui turpis.
              </p>
              <a
                class="btn mt-lg-4 mt-3 read scroll"
                href="#services"
                role="button"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
