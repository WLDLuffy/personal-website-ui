import React, { FC } from 'react';

interface ISideBarProps {

}

const SideBar: FC<ISideBarProps> = () => {
    return (
        <div className="container container-fluid">
            <div className="card" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: '#2f6fdc' }}>Hot Tech Topics</h5>
                    <h6 className="card-subtitle mb-2 text-muted">By Wong Wei Lun</h6>
                    <p className="card-text" style={{ textAlign: 'center' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Read More</a>
                </div>
            </div>

        </div>
    )
}

export default SideBar
