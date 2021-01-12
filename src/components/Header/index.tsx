import React, { FC } from "react";
import selfie from "../../assets/CV Photo.png";
import "./index.css";
import { skills } from '../../constants/resume.constants';

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {

	return (
		<div className="container-fluid justify-content-center introduction" style={{ marginBottom: '5%' }}>

			<div className="full-stack">FULL STACK</div>

			<div className="container">
				<img className="selfie" src={selfie} alt='selfie'></img>
			</div>
			<br />
			<br />
			<div className="container self-intro">
				<div className='horizontal-divider flex'>
					{skills.map((skill, index) => { return <img style={{ height: "30px", width: "30px", margin: "5px" }} src={skill.logo} alt={skill.skill} key={index} /> })}
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<div>
					<h5>Hey, I'm</h5>
					<h1> Weilun Wong </h1>
					<p>a software developer</p>
				</div>

			</div>
			<hr />
		</div>
	);
};

export default Header;
