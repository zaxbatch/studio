import React from 'react';
import '../css/App.css';

function Record() {
  return (
      <div className="track">
        <div className="track-control">
          <div>
          <i className="fas fa-microphone-alt"></i>
          </div>
        </div>
        <div className="track-wav">
        </div>
      </div>
  );
}

export default Record;
