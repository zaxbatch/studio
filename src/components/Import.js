import React from 'react';
import '../css/App.css';
import WaveSurfer from 'wavesurfer.js';
import Play from '../services/Play';
import ChangeSong from '../services/ChangeSong';




class Import extends React.Component {

 componentDidMount() { 
        global.wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });
 }

render() {
  return (
      <div className="track">
        <div className="track-control">
        	<label htmlFor="import-song"><i className="fas fa-file-import"></i></label>
          <div>
            <input id="import-song" name="import-song"  type="file" accept=".mp3, .wav, .ogg" onChange={ChangeSong} />
            <i className="fas fa-play" onClick={Play}></i>
          </div>
        </div>
        <div className="track-wav" id="waveform">
        </div>
      </div>
  );
  }
}
export default Import;
