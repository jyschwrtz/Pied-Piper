import { connect } from 'react-redux';
import { volume } from '../../actions/player_actions';
import VolumeControls from './volume_controls';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  volume: (level) => dispatch(volume(level))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolumeControls);
