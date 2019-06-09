import React from 'react';
import '../css/App.css';
import WaveSurfer from 'wavesurfer.js'; 



class Import extends React.Component {

 componentDidMount() { 
    
      this.wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });
    
 }
  
  ChangeSong=(event)=> {
    this.audio = document.querySelector('#import-song').files[0];
    this.wavesurfer.loadBlob(this.audio)
  }

  Play=()=> {
    this.wavesurfer.playPause();
  }



render() {


  return (
      <div className="track">
        <div className="track-control">
        	<label htmlFor="import-song"><i className="fas fa-file-import"></i></label>
        <div>
            <input id="import-song" name="import-song"  type="file" accept=".mp3, .wav, .ogg" onChange={(event) => this.ChangeSong(event)} />
            <i className="fas fa-play" onClick={this.Play}></i>
          </div>
        </div>
        <div className="track-wav" id="waveform">

        </div>

        
      </div>
  );
  }

}
export default Import;
