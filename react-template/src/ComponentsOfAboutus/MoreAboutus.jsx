import React from "react";
import DeepAbout from "./DeepAbout/DeepAbout";

const MoreAbout = () => {
  return (
    <div>
      <section class="inner-page-banner" id="home"></section>
      <div class="breadcrumb-agile">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            About Us
          </li>
        </ol>
      </div>
      <section class="banner-bottom py-5" id="exp">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">About More</h3>
          <div class="row mid-grids mt-lg-5 mt-3">
            <DeepAbout
              className="col-md-5 content-w3pvt-img"
              src="assets/images/ab1.jpg"
              head1="CLASSIC HAIR STYLING"
              head2="real men go to"
              head3=" real Men spas"
              para="Integer pulvinar leo id viverra feugiat.Pellentesque libero
                justo, semper at tempus vel, ultrices in sed ligula. Nulla uter
                sollicitudin velit. Sed porttitor orci vel fermentum elit
                maximus. Curabitur ut turpis massa in condimentum libero.
                Pellentesque maximus Pellentesque libero justo Nulla uter
                sollicitudin velit. Sed porttitor orci vel ferm semper at vel,
                ultrices in ligula semper at vel.Curabitur ut turpis massa in
                condimentum libero."
            />
          </div>
          <div class="row mid-grids mt-lg-5 mt-3 py-3">
            <DeepAbout
              className="col-md-5 content-w3pvt-img mt-lg-0 mt-3"
              src="assets/images/ab2.jpg"
              head1="CLASSIC BEARD STYLING"
              head2="checkout hottest"
              head3="beard styling"
              para="Integer pulvinar leo id viverra feugiat.Pellentesque libero
                justo, semper at tempus vel, ultrices in sed ligula. Nulla uter
                sollicitudin velit. Sed porttitor orci vel fermentum elit
                maximus. Curabitur ut turpis massa in condimentum libero.
                Pellentesque maximus Pellentesque libero justo Nulla uter
                sollicitudin velit. Sed porttitor orci vel ferm semper at vel,
                ultrices in ligula semper at vel.Curabitur ut turpis massa in
                condimentum libero."
            />
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreAbout;
