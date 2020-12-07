import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container justify-content-center">
					<ul className="nav">
						<li className="nav-item">
							<a className="nav-link active" href="#">
								HOME
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								BLOG
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
