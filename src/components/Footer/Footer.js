import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			Connect with me!
			<footer class="white-section" id="footer">
				<a class="footer-icons" href="https://www.twitter.com">
					<i class="fab fa-twitter"></i>
				</a>
				<a class="footer-icons" href="https://www.facebook.com/WeilunDLuffy/">
					<i class="fab fa-facebook-f"></i>
				</a>
				<a class="footer-icons" href="https://www.instagram.com/weilundluffy/">
					<i class="fab fa-instagram"></i>
				</a>
				<a class="footer-icons" href="mailto:wongweilun95@gmail.com">
					<i class="fas fa-envelope"></i>
				</a>

				<p>© Copyright 2020 Weilun</p>
			</footer>
		</div>
	);
};

export default Footer;
