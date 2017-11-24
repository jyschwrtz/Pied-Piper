import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import Browse from './browse';

const mapStateToProps = state => ({
  playlists: state.entities.playlists
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
