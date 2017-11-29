// VOLUME CONTROLS ARE IN CONTROL_BAR NOW

// import React from 'react';
//
// class VolumeControls extends React.Component {
//
//   handleChange(e) {
//     this.props.volume(e.target.value);
//   }
//
//   render() {
//     const { volume, volumeLevel } = this.props;
//     let volumeIcon;
//     if (volumeLevel > .5) {
//       volumeIcon = <i className="fa fa-volume-up" aria-hidden="true"></i>;
//     } else if (volumeLevel < 0.02) {
//       volumeIcon = <i className="fa fa-volume-off" aria-hidden="true"></i>;
//     } else {
//       volumeIcon = <i className="fa fa-volume-down" aria-hidden="true"></i>;
//     }
//     return(
//       <div className="volume-controls">
//         <div className="volume-icon">
//           { volumeIcon }
//         </div>
//         <input
//           type="range"
//           min="0"
//           max="1"
//           step="0.02"
//           onChange={this.handleChange.bind(this)}
//           value={this.props.volumeLevel}
//           />
//       </div>
//     );
//   }
// }
//
// export default VolumeControls;
