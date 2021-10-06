import React from 'react';

const MensSpa = ({name, src, def}) => {
    return ( 
       
              <div class="col-md-4 team-gd text-center">
              <div class="team-img mb-4">
                <img src={src} class="img-fluid" alt="user-image" />
              </div>
              <div class="team-info">
                <h3 class="mt-md-4 mt-3">{name}</h3>
                <p>
                  {def}
                </p>
                <ul class="list-unstyled team-icons mt-4">
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-facebook-f"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="t-icon">
                      <span class="fa fa-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

     
     );
}
 
export default MensSpa;