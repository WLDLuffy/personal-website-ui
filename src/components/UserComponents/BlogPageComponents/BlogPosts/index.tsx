import React, { FC, useState, useEffect } from 'react';
import Card from '../../../../features/Card';
import SideBar from '../SideBar';
import { getAllBlogPosts } from '../../../../api/blog.api';

interface IBlogPostsProps {

}

const BlogPosts: FC<IBlogPostsProps> = () => {

    const [blogPosts, setBlogPosts] = useState<any>([])

    useEffect(() => {
        getAllBlogPosts().then((res: any) => {
            setBlogPosts(res);
        }).catch((e) => {
            console.error(e)
        })
    }, [])

    return (
        <div className="container container-fluid" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5%' }}>

            <div className="row">
                <div className="col-lg-9">
                    {blogPosts.map((blogPost: any, index: any) => {
                        return <div key={index} style={{ padding: '2% 0%' }}>
                            <Card PostContent={blogPost.PostContent} Title={blogPost.Title} UUID={blogPost.UUID} maxWidth='100%' />
                        </div>
                    })}

                </div>

                <div className="col-lg-3" style={{ padding: '1% 0%' }}>
                    <SideBar />
                </div>


            </div>

        </div>
    )
}

export default BlogPosts
