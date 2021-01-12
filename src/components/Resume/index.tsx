import React, { FC, useEffect, useState } from "react";
import ResumeItem from "./ResumeItem";
import "./index.css";
import { resume } from "../../constants/resume.constants";
import { getAllResumes } from "../../api/resume.api";

interface IResumeProps {

}

const Resume: FC<IResumeProps> = () => {

	const [currentResume, setCurrentResume] = useState<any>([])

	useEffect(() => {
		getAllResumes().then((res: any) => {
			setCurrentResume(res);
		})
	}, [])

	return (
		<div className="container-fluid resume">
			<div>
				<h2>What I've done so far</h2>
			</div>
			<br />
			<br />
			<div>
				{resume.map((details: any, index: number) => { return <ResumeItem resumeDetails={details} key={index} /> })}
			</div>
			<hr />
		</div>
	);
};

export default Resume;
