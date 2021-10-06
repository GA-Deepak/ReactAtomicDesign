import React from 'react';

const Gal = ({href, src}) => {
    return ( 
        <div class="col-md-4 col-sm-6 gal-img">
        <a href={href}>
          <img src={src} alt="aegis" class="img-fluid mt-4" />
        </a>
      </div>
     );
}
 
export default Gal;