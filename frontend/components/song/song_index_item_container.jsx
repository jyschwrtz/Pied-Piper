import { connect } from 'react-redux';
import SongIndexItem from './song_index_item';
import { receiveCurrentSong } from '../../actions/song_actions';
import { play, nextSong, upNext } from '../../actions/player_actions';

const mapStateToProps = (state, newProps) => {
  let artist;
  if (newProps.song) {
    artist = state.entities.users[newProps.song.artist_id];
  }
  return({
    currentSong: state.ui.currentSong,
    playing: state.ui.playing,
    artist
  });
};

const mapDispatchToProps = dispatch => ({
  receiveCurrentSong: currentSong => dispatch(receiveCurrentSong(currentSong)),
  play: () => dispatch(play()),
  nextSong: () => dispatch(nextSong()),
  upNext: (songs) => dispatch(upNext(songs)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndexItem);
