import React from "react";
import Allbanner from "./BannerPage/Allbanner";

const Banner = () => {
  return (
    <div>
      <div class="banner_w3lspvt" id="home">
        <div class="csslider infinity" id="slider1">
          <input type="radio" name="slides" checked="checked" id="slides_1" />
          <input type="radio" name="slides" id="slides_2" />
          <input type="radio" name="slides" id="slides_3" />
          <input type="radio" name="slides" id="slides_4" />

          <ul class="banner_slide_bg">
            <li>
              <div class="slider-info bg1">
                <div class="bs-slider-overlay">
                  <Allbanner
                    head="We Create and Renovate Hair Style Trends"
                    para="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries."
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="slider-info bg2">
                <div class="bs-slider-overlay1">
                  <Allbanner
                    head="We Help to grow your hair as well beard"
                    para="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries."
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="slider-info bg3">
                <div class="bs-slider-overlay1">
                  <Allbanner
                    head="We Design and Create Hair Style Latest"
                    para="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries."
                  />
                </div>
              </div>
            </li>
            <li>
              <div class="slider-info bg4">
                <div class="bs-slider-overlay1">
                  <Allbanner
                    head=" We design latest trending haircuts"
                    para="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries."
                  />
                </div>
              </div>
            </li>
          </ul>
          <div class="navigation">
            <div>
              <label for="slides_1"></label>
              <label for="slides_2"></label>
              <label for="slides_3"></label>
              <label for="slides_4"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
