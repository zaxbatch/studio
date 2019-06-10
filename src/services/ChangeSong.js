const ChangeSong=()=> {

    global.audio = document.querySelector('#import-song').files[0];
    if (!global.audio) { console.log('operation canceled');}
    else
    global.wavesurfer.loadBlob(global.audio);
    
}

export default ChangeSong;