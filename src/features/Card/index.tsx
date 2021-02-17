import React, { FC } from 'react';
import { Link } from 'react-router-dom'

interface ICardProps {
    maxWidth?: string;
    Title?: string;
    PostContent?: string;
    UUID?: string;

}

const Card: FC<ICardProps> = ({ maxWidth, Title, PostContent, UUID }) => {
    return (
        <div className="card" style={{ maxWidth: maxWidth }}>
            <div className="card-body">
                <h5 className="card-title" style={{ color: '#2f6fdc' }}>{Title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By Wong Wei Lun</h6>
                <p className="card-text" style={{ textAlign: 'center' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" className="card-link">Read More</a> */}
                <Link to={"/blog/post/" + UUID}>Read More</Link>
            </div>
        </div>
    )
}

export default Card
