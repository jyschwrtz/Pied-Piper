import { connect } from 'react-redux';
import CollectionSongs from './collection_songs';
import { upNext, play, pastSongsInPlaylists } from '../../actions/player_actions';
import { selectPlaylistSongs, selectUserPlaylists } from '../../reducers/selectors';

const mapStateToProps = state => {
  const playlists = selectUserPlaylists(state);
  let allSongs = [];
  if (playlists.length > 0) {
    playlists.forEach(playlist => {
      allSongs = allSongs.concat(selectPlaylistSongs(state, playlist.id));
    });
  }
  let songs = [];
  allSongs.forEach(song => {
    if (!songs.includes(song)) {
      songs.push(song);
    }
  });
  return({
    songs,
    playing: state.ui.playing,
  });
};

const mapDispatchToProps = dispatch => ({
  upNext: (songs) => dispatch(upNext(songs)),
  pastSongsInPlaylists: (songs) => dispatch(pastSongsInPlaylists(songs)),
  play: () => dispatch(play()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionSongs);
