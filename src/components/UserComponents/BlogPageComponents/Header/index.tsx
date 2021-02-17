import React, { FC } from 'react';
import './index.css'

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {
    return (
        <div className="container container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="header-word">My Thoughts</h1>
                </div>

                <div className="col-lg-6" style={{ padding: '5%', overflow: 'auto' }}>
                    <h3 style={{ color: '#2f6fdc', textAlign: 'left' }}> Here are some of my thoughts...</h3>
                    <p style={{ textAlign: 'justify' }}>In this blog, I will be documenting my journey as a software developer. Every step of the way, as I learn something new, I want to document it down so that this knowledge can be shared with everyone interested in software development! </p>
                </div>

            </div>


        </div>
    )
}

export default Header
