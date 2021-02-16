import React, { FC } from 'react';
import { introduction } from '../../../constants/resume.constants';
import Card from '../../../features/Card';

interface IIntroductionProps {
}

const Introduction: FC<IIntroductionProps> = () => {

    return (
        <div className="container-fluid container" style={{ height: '100%' }}>
            <div className="row">
                <div className="col-lg-4">
                    <h2 style={{ textAlign: 'center', color: '#2f6fdc', padding: '10px 0' }}>A little about me...</h2>
                    <p style={{ textAlign: 'justify' }}>{introduction.selfDescription}</p>
                </div>
                <div className="col-lg-8">
                    <h2 style={{ textAlign: 'center', color: '#2f6fdc', padding: '10px 0' }}>Hear my thoughts!</h2>
                    <div className="row" style={{ justifyContent: 'space-evenly' }}>
                        <Card />
                        <Card />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;

