import React from "react";
import Button from "../ComponentsOfContactus/Button";
import Email from "../ComponentsOfContactus/Email";
import FirstName from "../ComponentsOfContactus/FirstName";
import LastName from "../ComponentsOfContactus/LastName";
import ListOfHead from "../ComponentsOfContactus/ListofHead";
import Map from "../ComponentsOfContactus/Map";
import Writemessage from "../ComponentsOfContactus/WriteMessage";
const ContactUs = () => {
  return (
    <div>
      <section class="inner-page-banner" id="home"></section>

      <div class="breadcrumb-agile">
       <ListOfHead/>
      </div>

      <section class="content-info py-5">
        <div class="container py-md-5">
         
          <div class="contact-w3pvt-form mt-5">
            <form action="#" class="w3layouts-contact-fm" method="post">
              <div class="row">
                <div class="col-lg-6">
               <FirstName/>
                <LastName/>
                <Email/>
                </div>
               <Writemessage/>
              <Button/>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Map/>
    </div>
  );
};

export default ContactUs;
