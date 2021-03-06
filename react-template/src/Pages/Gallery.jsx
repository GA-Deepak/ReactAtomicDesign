import React from "react";
import Gal from "../ComponentsOfGallery/Gal1";


const Gallery = () => {
  return (
    <div>
      <section class="inner-page-banner" id="home"></section>
      <div class="breadcrumb-agile">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Gallery
          </li>
        </ol>
      </div>

      <section class="gallery py-5" id="gallery">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
          <div class="gallery-content">
            <div class="row">
            <Gal href="#gal1" src="assets/images/g1.jpg"/>
            <Gal href="#gal2" src="assets/images/g2.jpg"/>
            <Gal href="#gal3" src="assets/images/g3.jpg"/>
            <Gal href="#gal4" src="assets/images/g4.jpg"/>
            <Gal href="#gal5" src="assets/images/g5.jpg"/>
            <Gal href="#gal6" src="assets/images/g6.jpg"/>

            </div>

            <div id="gal1" class="popup-effect">
              <div class="popup">
                <img
                  src="assets/images/g1.jpg"
                  alt="Popup image"
                  class="img-fluid mt-4"
                />
                <a class="close" href="#gallery">
                  ×
                </a>
              </div>
            </div>

            <div id="gal2" class="popup-effect">
              <div class="popup">
                <img
                  src="assets/images/g2.jpg"
                  alt="Popup image"
                  class="img-fluid mt-4"
                />
                <a class="close" href="#gallery">
                  ×
                </a>
              </div>
            </div>

            <div id="gal3" class="popup-effect">
              <div class="popup">
                <img
                  src="assets/images/g3.jpg"
                  alt="Popup image"
                  class="img-fluid mt-4"
                />
                <a class="close" href="#gallery">
                  ×
                </a>
              </div>
            </div>

            <div id="gal4" class="popup-effect">
              <div class="popup">
                <img
                  src="assets/images/g4.jpg"
                  alt="Popup image"
                  class="img-fluid mt-4"
                />
                <a class="close" href="#gallery">
                  ×
                </a>
              </div>
            </div>

            <div id="gal5" class="popup-effect">
              <div class="popup">
                <img
                  src="assets/images/g5.jpg"
                  alt="Popup image"
                  class="img-fluid mt-4"
                />
                <a class="close" href="#gallery">
                  ×
                </a>
              </div>
            </div>

            <div id="gal6" class="popup-effect">
              <div class="popup">
                <img
                  src="assets/images/g6.jpg"
                  alt="Popup image"
                  class="img-fluid mt-4"
                />
                <a class="close" href="#gallery">
                  ×
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
