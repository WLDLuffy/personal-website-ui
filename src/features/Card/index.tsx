import React, { FC } from 'react';

interface ICardProps {

}

const Card: FC<ICardProps> = () => {
    return (
        <div className="card" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: '#2f6fdc' }}>How to Setup a TypeScript Node.js Backend</h5>
                <h6 className="card-subtitle mb-2 text-muted">By Wong Wei Lun</h6>
                <p className="card-text" style={{ textAlign: 'justify' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Read More</a>
            </div>
        </div>
    )
}

export default Card
