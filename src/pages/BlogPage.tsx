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
            <div style={{ textAlign: 'center' }}>
                <Header />
                <BlogPosts />
                <Footer />
            </div>
        </Layout>

    )
}

export default BlogPage
