import React from 'react';

export default (props) => {
  const { song, artist } = props;
  console.log(props);
  let songName;
  let artistName;
  if (song) {
    songName = song.song_name;
  }
  if (artist) {
    artistName = artist.username;
  }
  return(
    <div className="current-song">
      <h1 className="song-name">{songName}</h1>
      <h2 className="artist-name">{artistName}</h2>
    </div>
  );
};
