import React, { FC } from 'react';
import Layout from '../components/Layout';

interface IContactPageProps {

}

const ContactPage: FC<IContactPageProps> = () => {
    return (
        <div>
            <Layout />
            This is my contact page
        </div>
    )
}

export default ContactPage
