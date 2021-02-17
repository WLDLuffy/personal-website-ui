import React, { FC } from 'react';

interface IHeaderProps {

};

const Header: FC<IHeaderProps> = () => {
    return (
        <div className="container container-fluid">
            <div className="row">
                <div className="col-lg-9">
                    <h1 className="header-word">Today's Digests</h1>
                </div>

                {/* <div className="col-lg-2" style={{ padding: '5%', overflow: 'auto' }}>
                    <h3 style={{ color: '#2f6fdc', textAlign: 'left' }}> </h3>

                </div> */}

            </div>


        </div>
    )
}

export default Header
