import React from 'react';

const BeardTrim = ({src, head1, para}) => {
    return ( 
        <>
 <div class="col-lg-3 col-md-6 pr-0 pl-md-3 pl-0 mt-lg-5 mt-4">
                   <img src={src} class="img-fluid" alt=""/>
               </div>
               <div class="col-lg-3 col-md-6 bg-grid-clr mt-lg-5 mt-md-4">
                   <h4 class="mt-md-0 my-2">{head1}</h4>
                   <p class="">{para}</p>
               </div>
        </>
     );
}
 
export default BeardTrim;