import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import { getOneBlogPostByUUID } from '../api/blog.api';
import { IBlogValues } from '../constants/IFormValues.constants';
import parse from 'html-react-parser';


interface IBlogPostPageProps {

}

const BlogPostPage: FC<IBlogPostPageProps> = () => {

    const [currentBlogPost, setCurrentBlogPost] = useState<any>(IBlogValues)
    const { UUID } = useParams<any>();

    useEffect(() => {
        getOneBlogPostByUUID(UUID).then((res: any) => {
            setCurrentBlogPost(res)
        })
    }, [])

    return (
        <Layout>
            <div className="container">
                {parse(currentBlogPost.PostContent)}
            </div>
            <Footer />
        </Layout>
    )
}

export default BlogPostPage
