import React from 'react';

const Info = () => {
    return ( 
        <div class="row my-lg-5 mt-3 mx-0">
        <div class="col-lg-6 text-info pl-0">
          <p>
            Proin eget tortor risus. Curabitur non nulla sit amet nisl
            tempus convallis quis ac lectus. Praesent sapien massa,
            convallis a pellentesque nec, egestas non nisi. Vivamus
            suscipit tortor eget felis porttitor volutpat Quisque velit
            nisi, pretium ut lacinia in, elementum id enim. Vivamus
            suscipit tortor eget felis porttitor elementum id enim
            volutpat...
          </p>
        </div>
        <div class="col-lg-6 mt-3 team-img">
          <div class="row">
            <div class="col-6">
              <img
                src="assets/images/s1.jpg"
                class="img-fluid"
                alt="user-image"
              />
            </div>
            <div class="col-6">
              <img
                src="assets/images/s2.jpg"
                class="img-fluid"
                alt="user-image"
              />
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Info;