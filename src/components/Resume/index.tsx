import React, { FC, useEffect, useState } from "react";
import ResumeItem from "./ResumeItem";
import "./index.css";
import { resume } from "../../constants/resume.constants"

interface IResumeProps {

}

const Resume: FC<IResumeProps> = () => {
	const [resumeDetails, setResumeDetails] = useState<any>(resume)

	return (
		<div className="container-fluid resume">
			<div>
				<h2>What I've done so far</h2>
			</div>
			<br />
			<br />
			<div>
				{resumeDetails.map((details: any) => { return <ResumeItem resumeDetails={details} /> })}
			</div>
			<hr />
		</div>
	);
};

export default Resume;
