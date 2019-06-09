import React from 'react';
import WaveSurfer from 'wavesurfer.js';

const WaveSurferSetup=()=>{
return
	    this.wavesurfer = WaveSurfer.create({
      	container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple'
    });
}



export default WaveSurferSetup;