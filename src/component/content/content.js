import React, {Component} from 'react';
import './content.css';




// function Content(props){
// 	return(
// 		<div>
// 			<div className="content_title">

// 				<h1>{props.title_name}</h1>
// 			</div>
// 		</div>

// 	)
// }

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Muhammad Wahyudi",
      address: "Emplasment, Desa Perk Sei Rumbia",
      contact: "0 8 2 2 7 3 9 2 7 8 5 3",
      title: "Front-End Developer",
      about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    };
  }
  render() {
    return (
    <div>
      <div className="content_title">
        {this.state.title}
      </div>
      			<div className="content">
				<div className="content_profile" id="content_profile">
					<div className="img_pofile"></div>
					<h1 align="center">My Profile</h1>
					<h1 align="center">---------</h1>
					<h3 align="center">Name </h3>
					<h5 align="center">{this.state.name}</h5>
					<h3 align="center">Address</h3>
					<h5 align="center">{this.state.address}</h5>
					<h3 align="center">Contact</h3>
					<h5 align="center">{this.state.contact}</h5>
				</div>
				<div className="content_about" id="content_about">
					<h1 align="center">About</h1>
					<h1 align="center">-------</h1>
					<h3>{this.state.about}</h3>
				</div>
			</div>
	</div>
    );
  }
}

export default Content;