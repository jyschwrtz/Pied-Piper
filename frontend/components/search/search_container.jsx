import { connect } from 'react-redux';
import Search from './search';
import { searchDatabase } from '../../actions/search_actions';

const mapStateToProps = state => {
  let songSearch, playlistSearch, userSearch;
  if (state.entities.search.song) {
    songSearch = Object.values(state.entities.search.song);
  }
  if (state.entities.search.playlist) {
    playlistSearch =  Object.values(state.entities.search.playlist);
  }
  if (state.entities.search.user) {
    userSearch =  Object.values(state.entities.search.user);
  }
  return ({
    songSearch,
    playlistSearch,
    userSearch,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  searchDatabase: (query) => dispatch(searchDatabase(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
