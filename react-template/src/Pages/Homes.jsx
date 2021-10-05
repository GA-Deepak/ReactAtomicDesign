import React, { Component } from "react";
import Banner from "../ComponentsOfHome/Banner";
import About from "../ComponentsOfHome/About";
import Services from "../ComponentsOfHome/Services";
import Prices from "../ComponentsOfHome/Prices";
import Call from "../ComponentsOfHome/Call";
import AbrahamSpa from "../ComponentsOfServices/AbrahamSpa";
import MarianaSpa from "../ComponentsOfServices/MarianaSpa";
import Nebula from "../ComponentsOfServices/Nebula";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <About />
        <Services />
        <Prices />
       <Call/>
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

        <section class="subscribe" id="subscribe">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
                <div class="news-icon mr-3">
                  <span class="fa fa-paper-plane" aria-hidden="true"></span>
                </div>
                <div class="text">
                  <h3>Subscribe To Our Newsletter</h3>
                </div>
              </div>
              <div class="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here"
                    required=""
                  />
                  <button class="btn1">
                    <span class="fa fa-paper-plane" aria-hidden="true"></span>
                  </button>
                </form>
                <p>we never share your email with anyone else</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
