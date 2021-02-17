import React, { FC } from "react";
import selfie from "../../../../assets/CV Photo.png";
import "./index.css";
import { skills } from '../../../../constants/resume.constants';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {

	return (
		<div className="container-fluid justify-item-center header-class" >


			<div className="full-stack">
				<p>DEVELOPER</p>
			</div>

			<div className="overlap">
				<img className="selfie" src={selfie} alt='selfie'></img>
			</div>


			<div className='skill-set'>
				{skills.map((skill, index) => { return <img className="skills-icon" src={skill.logo} alt={skill.skill} key={index} /> })}
			</div>

			<div className='title'>
				<h5>Hey, I'm</h5>
				<h1 style={{ color: '#bbe1fa' }}> Weilun Wong </h1>
				<p>a software developer</p>
			</div>

		</div>
	);
};

export default Header;
