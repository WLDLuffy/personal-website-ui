import React, { FC } from "react";
import "./index.css";

interface IFooterProps {

};


const Footer: FC<IFooterProps> = () => {
	return (
		<div className="footer" style={{ textAlign: 'center' }}>
			<p style={{ color: "white" }}>Connect with me!</p>
			<footer className="" id="footer">
				<a className="footer-icons" href="https://www.twitter.com">
					<i className="fab fa-twitter"></i>
				</a>
				<a className="footer-icons" href="https://www.facebook.com/WeilunDLuffy/">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a className="footer-icons" href="https://www.instagram.com/weilundluffy/">
					<i className="fab fa-instagram"></i>
				</a>
				<a className="footer-icons" href="mailto:wongweilun95@gmail.com">
					<i className="fas fa-envelope"></i>
				</a>
				<a className="footer-icons" href="https://www.linkedin.com/in/wei-lun-wong-448baa189/">
					<i className="fab fa-linkedin"></i>
				</a>
			</footer>
		</div>
	);
};

export default Footer;
