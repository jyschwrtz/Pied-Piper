import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import User from './user';
import {
  selectPlaylistSongs,
  selectUserPlaylists
} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const ownerId = parseInt(ownProps.match.params.userId);
  return({
    user: state.entities.users[ownerId],
    playlists: selectUserPlaylists(state, ownerId),
  });
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(User));
