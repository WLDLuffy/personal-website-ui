import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { introduction } from '../../../../constants/resume.constants';
import Card from '../../../../features/Card';
import './index.css';

interface IIntroductionProps {
}

const Introduction: FC<IIntroductionProps> = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/resume');
    }


    return (
        <div className="container-fluid container" style={{ height: '100%' }}>
            <div className="row">
                <div className="col-lg-4">
                    <h2 style={{ textAlign: 'center', color: '#2f6fdc', padding: '10px 0' }}>A little about me...</h2>
                    <p style={{ textAlign: 'justify' }}>{introduction.selfDescription}</p>
                    <div style={{ padding: '5%' }}>
                        <button className='btn btn-custom' onClick={handleClick} >View Resume</button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h2 style={{ textAlign: 'center', color: '#2f6fdc', padding: '10px 0' }}>Hear my thoughts!</h2>
                    <div className="row" style={{ justifyContent: 'space-evenly' }}>
                        <Card maxWidth="18rem" />
                        <Card maxWidth="18rem" />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Introduction;

