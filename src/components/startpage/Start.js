import React from "react";
import "./Start.css";
import Logo from "../global/Logo";
import chef_img from "./chef_logo.jpg";
import {Link} from "react-router-dom";
function Start() {
	return (
		<div className="start">
			<div className="body">
				<div className="left">
					<div className="logo_text">
						<div className="left_logo">FOOD.</div>
						<div className="right_logo">GIVEME</div>
					</div>
					<div className="text_bot">
						Your portal for ordering food
					</div>
				</div>
				<div className="center">
					<img src={chef_img} alt="chef" className="chef_img" />
				</div>
				<div className="right">
					<Link to="/login">
						<button className="start_btn">START</button>
					</Link>
				</div>
			</div>
			<div className="bot_banner">
				<button className="login_btn">login</button>
				<div> | </div>
				<button className="aboutus_btn">about us</button>
			</div>
		</div>
	);
}

export default Start;
