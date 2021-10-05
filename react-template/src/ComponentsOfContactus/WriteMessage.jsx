import React from 'react';

const Writemessage = () => {
    return ( 
        <div class="col-lg-6">
        <div class="form-group">
          <label>Write Message</label>
          <textarea
            class="form-control"
            name="Message"
            placeholder=""
            required=""
          ></textarea>
        </div>
      </div>
     );
}
 
export default Writemessage;