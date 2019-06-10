import React from 'react';
import '../css/App.css';
import WaveSurfer from 'wavesurfer.js'; 
import MicrophonePlugin from 'wavesurfer.js/src/plugin/microphone.js';

class Record extends React.Component {

componentDidMount() {
    global.waverecord = WaveSurfer.create({
    container     : '#record',
    waveColor     : 'black',
    interact      : false,
    cursorWidth   : 0,
    plugins: [
      MicrophonePlugin.create()
    ]
  });
}
recordTrack=()=> {

  global.waverecord.microphone.on('deviceReady', function(stream) {
      console.log('Device ready!', stream);
  });
  global.waverecord.microphone.on('deviceError', function(code) {
      console.warn('Device error: ' + code);
  });

  // start the microphone
  global.waverecord.microphone.start();
}

stopRecord=()=> {
  global.waverecord.microphone.stop();
}

render() {
    return (
        <div className="track">
          <div className="track-control">
            <div>
            <i className="fas fa-microphone-alt" onClick={this.recordTrack}></i>
            <button onClick={this.stopRecord}>Stop</button>
            </div>
          </div>
          <div className="track-wav" id="record">
          </div>
        </div>
    );
  }
}

export default Record;
