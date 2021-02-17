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
            <div className="home-page" style={{ textAlign: 'center' }}>
                <Header />
                <Introduction />
                <Resume />
                <Contact />
                <Footer />
            </div>
        </Layout>


    )
}

export default HomePage;