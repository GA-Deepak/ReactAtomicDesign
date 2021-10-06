import React from 'react';

const Allbanner = ({head, para}) => {
    return ( 
        <div class="banner-text">
        <div class="container">
          <h2 class="movetxt agile-title text-capitalize">
            {head}
          </h2>
          <p>
        {para}
          </p>
          <a href="contact.html" class="btn">
            {" "}
            Get appointment{" "}
          </a>
        </div>
      </div>
     );
}
 
export default Allbanner;