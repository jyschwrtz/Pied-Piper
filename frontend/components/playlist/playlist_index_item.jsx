import React from 'react';

export default (props) => {
  const { playlist } = props;
  let content;
  if (playlist) {
    content = (
     <div className='browse-index-item'>
        <button>
          <img src={playlist.image_url}/>
          <p>{playlist.title}</p>
        </button>
     </div>
   );
  }
  return(
    <div>
      {content}
    </div>
  );
};
