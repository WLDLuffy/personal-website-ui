import React, { FC } from "react";
// import dbsLogo from "../../assets/DBS_logo.png";
// import chevronLogo from "../../assets/chevron-logo.png";
import "./index.css";

interface IResumeItemProps {
	resumeDetails: any
}

const ResumeItem: FC<IResumeItemProps> = (props: any) => {
	return (
		<div className="mb-3 container" style={{ marginBottom: "20px" }}>
			<div className="row justify-content-center">
				<div className="col-4">
					<img src={props.resumeDetails.imageUrl} alt="" className="resume-image" />
				</div>
				<div className="col-6" style={{ textAlign: "left" }}>
					<h4 className="">{props.resumeDetails.companyName}</h4>
					<p>{props.resumeDetails.positionHeld}</p>
					<p>{props.resumeDetails.date}</p>
					<p style={{ textAlign: 'justify' }}>{props.resumeDetails.description}</p>
				</div>

			</div>
		</div>
	);
};

export default ResumeItem;
