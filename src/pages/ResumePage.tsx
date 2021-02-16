import React, { FC } from 'react';
import Layout from '../components/Layout';
import Header from '../components/ResumePageComponents/Header';
import Footer from '../components/Footer';
import Canvas from '../features/Canvas';
import CV from '../components/ResumePageComponents/CV'

interface IResumePageProps {

}


const ResumePage: FC<IResumePageProps> = () => {
    return (
        <div>
            <Layout />
            <Header />
            <CV />
            <Footer />

        </div >
    )
}

export default ResumePage;
