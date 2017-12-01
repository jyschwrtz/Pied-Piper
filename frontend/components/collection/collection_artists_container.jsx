import { connect } from 'react-redux';
import CollectionArtists from './collection_artists';
import { selectPlaylistSongs, selectUserPlaylists } from '../../reducers/selectors';


const mapStateToProps = state => {
  const playlists = selectUserPlaylists(state);
  let allSongs = [];
  if (playlists.length > 0) {
    playlists.forEach(playlist => {
      allSongs = allSongs.concat(selectPlaylistSongs(state, playlist.id));
    });
  }
  let artistIds = [];
  allSongs.forEach(song => {
    if (!artistIds.includes(song.artist_id)) {
      artistIds.push(song.artist_id);
    }
  });
  let artists = artistIds.map(id => state.entities.users[id]);
  return({
    artists,
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionArtists);
