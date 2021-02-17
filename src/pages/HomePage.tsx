import React, { FC } from 'react';
import Layout from '../components/Layout';
import Introduction from '../components/UserComponents/HomePageComponents/Introduction';
import Resume from '../components/UserComponents/HomePageComponents/Resume';
import Footer from '../components/Footer';
import Header from '../components/UserComponents/HomePageComponents/Header';
import Contact from '../components/UserComponents/HomePageComponents/Contact';

interface IHomePageProps {

};

const HomePage: FC<IHomePageProps> = () => {


    return (

        <Layout >
            <Header />
            <Introduction />
            <Resume />
            <Contact />
            <Footer />
        </Layout>

    )
}

export default HomePage;