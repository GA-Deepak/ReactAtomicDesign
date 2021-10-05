import React from "react";
import Catch_Chat from "../ComponentsOfSingle/CatchOnChat";
import Form from "../ComponentsOfSingle/Form";
import Info from "../ComponentsOfSingle/Info";
import Jackie from "../ComponentsOfSingle/Jackie";
import John from "../ComponentsOfSingle/John";
import William from "../ComponentsOfSingle/William";
const Single = () => {
  return (
    <div>
      <section class="inner-page-banner" id="home"></section>

      <div class="breadcrumb-agile">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Single page
          </li>
        </ol>
      </div>

      <section class="banner-bottom py-5">
        <div class="container py-md-5">
          <h3 class="heading text-center mb-3 mb-sm-5">Saloon Info</h3>
          <div class="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
            <Catch_Chat/>
           <Info/>
            <div class="comment-sec-w3ls">
              <h4 class="leave-w3ls mb-5">3 Comments</h4>
              <ul class="list-unstyled">
                <John/>
                <Jackie/>
                <William/>
              </ul>
            </div>
            <div class="comment-bottom w3pvt_mail_grid_right p-0 my-lg-5 my-4">
              <h4 class="leave-w3ls mb-5">Leave a Reply</h4>
              <Form/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
