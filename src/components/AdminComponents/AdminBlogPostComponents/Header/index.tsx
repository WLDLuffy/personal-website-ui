import React, { FC } from 'react';


interface IHeaderProps {

}

const Header: FC<IHeaderProps> = () => {




    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="header-word">Write Blog.....</h1>
                </div>

                <div className="col-lg-6" style={{ padding: '5%', overflow: 'auto' }}>
                    <h3 style={{ color: '#2f6fdc', textAlign: 'left' }}> Pen down your thoughts...</h3>
                    <p style={{ textAlign: 'justify' }}>Document your day, your learning progression or just about anything in life!</p>
                </div>

            </div>
        </div>
    )
}

export default Header;
