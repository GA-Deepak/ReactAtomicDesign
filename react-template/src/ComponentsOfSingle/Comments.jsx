import React from 'react';

const Comments = ({className, src, head, para}) => {
    return ( 
        <li class={className}>
        <img
          class="mr-3 img-fluid"
          src={src}
          alt=""
        />

        <div class="media-body">
          <h5 class="mt-0 mb-1">{head}</h5>
          <p class="mt-3">
           {para}
          </p>
        </div>
      </li>
     );
}
 
export default Comments;