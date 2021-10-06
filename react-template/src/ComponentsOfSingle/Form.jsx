import React from 'react';

const Form = () => {
    return ( 
        <form action="#" class="w3ls-contact-fm" method="">
                <div class="form-group">
                  <label>Write Message</label>
                  <textarea
                    class="form-control"
                    name="Message"
                    placeholder=""
                    required=""
                  ></textarea>
                </div>
                <div class="row leave-comment">
                  <div class="col-lg-6 form-group">
                    <label>First Name</label>
                    <input
                      class="form-control"
                      type="text"
                      name="Name"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div class="col-lg-6 form-group">
                    <label>Email</label>
                    <input
                      class="form-control"
                      type="email"
                      name="Email"
                      placeholder=""
                      required=""
                    />
                  </div>
                </div>

                <button type="submit" class="btn read mt-3">
                  Submit
                </button>
              </form>
     );
}
 
export default Form;