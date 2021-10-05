import React from 'react';

const FirstName = () => {
    return ( 
        <div class="form-group">
        <label>First Name</label>
        <input
          class="form-control"
          type="text"
          name="Name"
          placeholder=""
          required=""
        />
      </div>
     );
}
 
export default FirstName;