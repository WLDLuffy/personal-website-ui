import React, { FC } from 'react';
import Layout from '../components/Layout';
import Introduction from '../components/HomePageComponents/Introduction';
import Resume from '../components/HomePageComponents/Resume';
import Footer from '../components/Footer';
import Header from '../components/HomePageComponents/Header';
import Contact from '../components/HomePageComponents/Contact';

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