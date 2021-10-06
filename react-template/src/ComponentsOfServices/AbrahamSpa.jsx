import React from 'react';

const AbrahamSpa = ({ para, head, src}) => {
    return ( 
       
        <div class="test-info">
          <p>
            {para}
          </p>
          <h3 class="mt-md-4 mt-3">{head}</h3>

          <div class="test-img text-center mb-3">
            <img
              src={src}
              class="img-fluid"
              alt="user-image"
            />
          </div>
          <div class="mobl-footer test-soc text-center">
            <ul class="list-unstyled">
              <li>
                <a href="#">
                  <span class="fa fa-facebook-f"></span>
                </a>
              </li>
              <li class="mx-1">
                <a href="#">
                  <span class="fa fa-twitter"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
     
     );
}
 
export default AbrahamSpa;