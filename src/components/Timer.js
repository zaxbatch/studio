import React from 'react';
import '../css/App.css';

class Timer extends React.Component {
  render() {
	  return (
	  	<div className="flex-box-center">
	      <div id="timer">
	        <h1 id="timer-box">00:00:00</h1>
	      </div>
	    </div>
	  );
	}
}
export default Timer;
