import React from 'react';
import '../css/App.css';
import Controller from '../components/Controller';
import Menu from '../components/Menu';
import Timer from '../components/Timer';
import Import from '../components/Import';
import Record from '../components/Record';
import LoadSong from '../services/LoadSong';
import Alert from '../services/Alert';
import WaveSurfer from 'wavesurfer.js';


class App extends React.Component {



  render() {

    return (
      <div className="App">
        <header className="App-header">
          
        </header>

        <Menu />
        <br />

        <Controller />
        <Timer />
        <Import />
        <Record />


        
      </div>
    );
  }
}

export default App;
