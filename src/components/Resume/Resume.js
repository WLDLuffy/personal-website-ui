import React from "react";
import ResumeItem from "./ResumeItem";
import "./Resume.css";

const Resume = () => {
	return (
		<div className="container-fluid">
			<div>
				<h2>Here's what I've done so far</h2>
			</div>
			<div>
				<ResumeItem />
			</div>
		</div>
	);
};

export default Resume;
