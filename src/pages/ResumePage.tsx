import React, { FC } from 'react';
import Layout from '../components/Layout';
import Header from '../components/UserComponents/ResumePageComponents/Header';
import Footer from '../components/Footer';
import Canvas from '../features/Canvas';
import CV from '../components/UserComponents/ResumePageComponents/CV'

interface IResumePageProps {

}


const ResumePage: FC<IResumePageProps> = () => {
    return (
        <Layout >
            <div style={{ textAlign: 'center' }}>
                <Header />
                <CV />
                <Footer />
            </div>
        </Layout>
    )
}

export default ResumePage;
