import React from 'react';

const DeepAbout = ({className, src, head1, head2, head3, para}) => {
    return ( 
       <>
            <div class={className}>
              <img src={src} alt="" class="img-fluid" />
            </div>
            <div class="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
              <h5 class="mt-1">{head1}</h5>
              <h4>
                {head2}
                <br />
               {head3}
              </h4>
              <p class="mt-2 text-left">
                {para}
              </p>
            </div>
         </>
     );
}
 
export default DeepAbout;