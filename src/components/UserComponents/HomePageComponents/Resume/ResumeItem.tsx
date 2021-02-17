import React, { FC } from "react";
// import dbsLogo from "../../assets/DBS_logo.png";
// import chevronLogo from "../../assets/chevron-logo.png";
import "./index.css";

interface IResumeItemProps {
	resumeDetails: any
}

const ResumeItem: FC<IResumeItemProps> = (props: any) => {
	return (
		<div className="row resume" style={{ padding: '3%' }}>
			<div className="col-md-4">
				<img src={props.resumeDetails.imageUrl} alt="" className="resume-image" />
			</div>
			<div className="col-md-8" style={{ textAlign: "left" }}>
				<h4 style={{ color: '#2f6fdc' }}>{props.resumeDetails.companyName}</h4>
				<p style={{ color: '#bbe1fa' }}>{props.resumeDetails.positionHeld}</p>
				<p>{props.resumeDetails.date}</p>
				<p style={{ textAlign: 'justify' }}>{props.resumeDetails.description}</p>
			</div>
		</div>
	);
};

export default ResumeItem;
