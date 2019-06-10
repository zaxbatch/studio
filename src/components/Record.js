import React from 'react';
import '../css/App.css';
import WaveSurfer from 'wavesurfer.js'; 


class Record extends React.Component {

render() {
    return (
        <div className="track">
          <div className="track-control">
            <div>
            <i className="fas fa-microphone-alt" onClick={this.recordTrack}></i>
            </div>
          </div>
          <div className="track-wav" id="record">
          </div>
        </div>
    );
  }
}

export default Record;
