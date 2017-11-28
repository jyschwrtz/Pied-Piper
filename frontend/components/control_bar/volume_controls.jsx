import React from 'react';

class VolumeControls extends React.Component {

  handleChange(e) {
    this.props.volume(e.target.value);
  }

  render() {
    const { volume, volumeLevel } = this.props;
    return(
      <div className="volume-controls">
        <h1>Volume Controls</h1>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          onChange={this.handleChange.bind(this)}
          value={this.props.volume}
          />
      </div>
    );
  }
}

export default VolumeControls;
