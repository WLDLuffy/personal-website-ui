import React, { FC } from "react";
import { Link } from 'react-router-dom';

interface INavbarProps {

}

const Navbar: FC<INavbarProps> = () => {
    return (
        <div className="navigation">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container justify-content-center">
                    <ul className="nav">
                        <Link to={'/'}><li className="navigation-item" style={{ paddingRight: '10px', color: 'white' }} >HOME</li></Link>
                        <Link to={'/resume'}><li className="navigation-item" style={{ paddingRight: '10px', color: 'white' }}>RESUME</li></Link>
                        <Link to={'/contact'}><li className="navigation-item" style={{ paddingRight: '10px', color: 'white' }}>CONTACT</li></Link>
                        <Link to={'/blog'}><li className="navigation-item" style={{ paddingRight: '10px', color: 'white' }}>BLOG</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;