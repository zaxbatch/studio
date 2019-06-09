  const ChangeSong =(event)=> {
  
    this.audio = document.querySelector('#import-song').files[0];
    this.wavesurfer.loadBlob(this.audio)
 
  }

  export default ChangeSong;