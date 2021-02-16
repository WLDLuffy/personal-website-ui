import React, { FC } from 'react';
import CVImage from '../../../assets/CV.png';

interface ICVProps {

}

const CV: FC<ICVProps> = () => {
    return (
        <div className='container container-fluid'>
            <img src={CVImage} style={{ height: '100%', width: '100%' }} />
        </div>
    )
}

export default CV
