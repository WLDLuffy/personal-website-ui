import React, { FC } from 'react';
import Layout from '../components/Layout';
import Header from '../components/UserComponents/BlogPageComponents/Header';
import BlogPosts from '../components/UserComponents/BlogPageComponents/BlogPosts';
import Footer from '../components/Footer';

interface IBlogPageProps {

};

const BlogPage: FC<IBlogPageProps> = () => {


    return (
        <Layout >
            <Header />
            <BlogPosts />
            <Footer />
        </Layout>

    )
}

export default BlogPage
