import React, {Component} from 'react';
import './header.css';

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
			<div className="navbar">
				<a href="#content_profile">
					<div className="navbar_content">Profile</div>
				</a>

				<a href="#content_about">
					<div className="navbar_content">About</div>
				</a>	
			</div>

		</div>
	)
}

export default Header;