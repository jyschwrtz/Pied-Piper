import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return(
    <div className='browse-index-item'>
      <Link to={`/user/1/playlist/8`} >
        <img src='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/5/13/1399990966665/Picture_246.png?w=300&q=55&auto=format&usm=12&fit=max&s=0201cd98a0f48b6a1e61dfaf10b38a28'/>
        <p>New Music Friday</p>
      </Link>
    </div>
  );
};
