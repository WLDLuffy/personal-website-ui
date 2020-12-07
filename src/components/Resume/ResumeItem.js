import React from "react";
import dbsLogo from "./DBS_logo.png";
import chevronLogo from "./chevron-logo.png";
import "./Resume.css";

const ResumeItem = (resume) => {
	return (
		<div className="container-sm justify-content-center">
			<div className="container-sm resume-item">
				<img className="resume-image rounded-sm float-left" src={dbsLogo}></img>

				<h4 className="company-name text-justify">DBS SEED Programme</h4>
				<h5 className="position-held text-justify">Technology Executive</h5>
				<h6 className="position-held text-justify">Aug 20 - Present</h6>
				<p className="job-description text-justify">
					This opportunity given to me was extraordinary. I started off as an
					engineer and I didnt not expect myself to be taking up a career on
					software development. I believe this career will provide me with
					avenues on helping people simplify their lives using technology
				</p>
			</div>

			<div className="resume-item">
				<img
					className="resume-image rounded-sm float-left"
					src={chevronLogo}
				></img>

				<h4 className="company-name text-justify">Chevron Oronite Pte Ltd</h4>
				<h5 className="position-held text-justify">
					Process Engineering Intern
				</h5>
				<h6 className="position-held text-justify">Jul 19 - Dec 19</h6>
				<p className="job-description text-justify">
					As a chemical engineer by degree, it was eye opening to be able to
					experience the life of a process engineer in an actual chemical plant.
					I was able to learn many tangible and useful skills such as data
					analysis, troubleshooting and optimization skills. Most of the tasks I
					did involve coding and programming, and these experiences led me to
					consider a career as a software developer.
				</p>
			</div>
		</div>
	);
};

export default ResumeItem;
