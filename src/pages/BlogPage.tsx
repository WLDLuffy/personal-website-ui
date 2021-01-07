import React, { FC } from 'react';
import Layout from '../components/Layout';
import Introduction from '../components/Header';
import Resume from '../components/Resume';
import Footer from '../components/Footer'

interface IBlogPageProps {

};

const BlogPage: FC<IBlogPageProps> = () => {


    return (
        <div>
            <Layout />
            Hold up! I am still working on this page. Give me sometime to cook this up!
        </div>

    )
}

export default BlogPage
