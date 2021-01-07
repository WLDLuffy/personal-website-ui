import React, { FC } from 'react';
import Layout from '../components/Layout';

interface IResumePageProps {

}


const ResumePage: FC<IResumePageProps> = () => {
    return (
        <div>
            <Layout />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1 style={{ fontSize: '750%', textAlign: 'left', color: "#dbdbdb" }}>My Resume</h1>

                    </div>
                    {/* <div className="col-4 pt-4" style={{ textAlign: 'left' }}>
                        <h4>Let me know if..</h4>
                        <p>You'd like to work with me! It can be for small projects, or even a full time job offer! </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ResumePage;
