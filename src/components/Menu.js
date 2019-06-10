import React from 'react';
import '../css/App.css';

class Menu extends React.Component {
	render() {
	  return (
	      <div id="menu">
		      <a href="/" className="menu-item">File</a>
		      <a href="/" className="menu-item">Help</a>
	      </div>
	  	);
	}
}

export default Menu;
