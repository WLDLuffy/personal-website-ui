import React, { FC } from 'react';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../components/Contact';

interface IHomePageProps {

};

const HomePage: FC<IHomePageProps> = () => {


    return (
        <div>
            <Layout />
            <Header />
            <Introduction />
            <Resume />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;