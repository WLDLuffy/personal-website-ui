import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer center">
			Connect with me!
			<footer className="white-section" id="footer">
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

				<p>© Copyright 2020 Weilun</p>
			</footer>
		</div>
	);
};

export default Footer;
