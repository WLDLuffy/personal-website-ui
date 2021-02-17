import React, { FC } from "react";
import { Link } from 'react-router-dom';
import './index.css'

interface ILayoutProps {

}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div style={{ width: '100%' }}>
			<nav className="navbar bg-custom justify-content-center">
				<ul className="nav">
					<Link to={'/'}><li className="navigation-item"  >HOME</li></Link>
					<Link to={'/resume'}><li className="navigation-item" >RESUME</li></Link>
					<Link to={'/blog'}><li className="navigation-item" >BLOG</li></Link>
					<Link to={'/admin/home'}><li className="navigation-item" >ADMIN</li></Link>
				</ul>
			</nav>
			{children}
		</div >

	);
};

export default Layout;
