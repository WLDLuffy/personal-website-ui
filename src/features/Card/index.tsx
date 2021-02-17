import React, { FC } from 'react';

interface ICardProps {
    maxWidth: string;
}

const Card: FC<ICardProps> = (props) => {
    return (
        <div className="card" style={{ maxWidth: props.maxWidth }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: '#2f6fdc' }}>How to Setup a TypeScript Node.js Backend</h5>
                <h6 className="card-subtitle mb-2 text-muted">By Wong Wei Lun</h6>
                <p className="card-text" style={{ textAlign: 'center' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Read More</a>
            </div>
        </div>
    )
}

export default Card
