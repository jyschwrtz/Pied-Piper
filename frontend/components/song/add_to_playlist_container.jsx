import { connect } from 'react-redux';
import AddToPlaylist from './add_to_playlist';
import { selectUserPlaylists } from '../../reducers/selectors';

const mapStateToProps = state => {
  const playlists = selectUserPlaylists(state);
  return({
    playlists
  });
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToPlaylist);
