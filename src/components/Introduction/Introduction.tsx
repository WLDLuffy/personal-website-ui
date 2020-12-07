import React from "react";
import selfie from "./CV Photo.png";
import "./Introduction.css";

const Introduction = () => {
	return (
		<div className="container-fluid justify-content-center introduction">
			<div className="container">
				<img className="selfie" src={selfie}></img>
			</div>
			<div className="container self-intro">
				<hr />
				<h5>Hey, I'm</h5>
				<h1> Weilun Wong </h1>
				<p>a software developer</p>
			</div>
		</div>
	);
};

export default Introduction;
