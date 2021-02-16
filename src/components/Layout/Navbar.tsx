import React, { FC } from "react";
import { Link } from 'react-router-dom';
import './index.css'

interface INavbarProps {

}

const Navbar: FC<INavbarProps> = () => {
    return (
        <nav className="navbar bg-custom justify-content-center">
            <ul className="nav">
                <Link to={'/'}><li className="navigation-item"  >HOME</li></Link>
                <Link to={'/resume'}><li className="navigation-item" >RESUME</li></Link>
                <Link to={'/contact'}><li className="navigation-item" >CONTACT</li></Link>
                <Link to={'/blog'}><li className="navigation-item" >BLOG</li></Link>
            </ul>
        </nav>
    );
};

export default Navbar;