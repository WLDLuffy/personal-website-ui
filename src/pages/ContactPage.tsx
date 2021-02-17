import React, { FC } from 'react';
import Layout from '../components/Layout';

interface IContactPageProps {

}

const ContactPage: FC<IContactPageProps> = () => {
    return (

        <Layout>
            <div style={{ textAlign: 'center' }}>
                This is my contact page
            </div>
        </Layout>

    )
}

export default ContactPage
