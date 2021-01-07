import React, { FC } from 'react';
import { introduction } from '../../constants/resume.constants';

interface IIntroductionProps {
}

const Introduction: FC<IIntroductionProps> = () => {

    return (
        <div className="container-fluid introduction" style={{ justifyContent: 'space-between', marginBottom: '1%' }}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>A little about me...</h2>
                        <br />
                        <br />
                        <p style={{ textAlign: 'justify' }}>{introduction.selfDescription}</p>

                    </div>
                    {/* <div className="col-8">
                        <h4>Thinking Out Loud!</h4>

                    </div> */}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Introduction;

