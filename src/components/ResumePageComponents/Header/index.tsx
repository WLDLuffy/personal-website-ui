import React, { FC } from 'react';
import './index.css'

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {
    return (
        <div className="container container-fluid" >
            <div className="row">
                <div className="col-lg-6">
                    <h1 className='resume-word'>My Resume</h1>

                </div>
                <div className="col-lg-6" style={{ textAlign: 'left', padding: '5%', overflow: 'auto' }}>
                    <h3 style={{ color: '#2f6fdc' }}>Let me know if..</h3>
                    <p style={{ textAlign: 'justify' }}>You'd like to work with me! It can be for small projects, or even a full time job offer! I am open to learning new technology stacks for your project needs. I hope to be able to exposed to as many technologies as possible! </p>
                </div>
            </div>
        </div>
    )
}

export default Header
