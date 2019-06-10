import React from 'react';
import '../css/App.css';
import Play from '../services/Play';

class Controller extends React.Component {

  render() {
    return (
      <div className="controls">
        <i className="fas fa-circle"></i>
        <i className="fas fa-play" onClick={Play}></i>
        <i className="fas fa-backward"></i>
        <i className="fas fa-stop"></i>
        <i className="fas fa-pause"></i>
        <i className="fas fa-forward"></i>
      </div>
    );
  } 
}

export default Controller;
