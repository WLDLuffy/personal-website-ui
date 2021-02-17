import React, { FC } from 'react';
import Card from '../../../../features/Card';
import SideBar from '../SideBar';

interface IBlogPostsProps {

}

const BlogPosts: FC<IBlogPostsProps> = () => {
    return (
        <div className="container container-fluid" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5%' }}>

            <div className="row">
                <div className="col-lg-9">
                    <div style={{ padding: '2% 0%' }}>
                        <Card maxWidth='100%' />
                    </div>
                    <div style={{ padding: '2% 0%' }}>
                        <Card maxWidth='100%' />
                    </div>
                    <div style={{ padding: '2% 0%' }}>
                        <Card maxWidth='100%' />
                    </div>
                    <div style={{ padding: '2% 0%' }}>
                        <Card maxWidth='100%' />
                    </div>
                    <div style={{ padding: '2% 0%' }}>
                        <Card maxWidth='100%' />
                    </div>

                </div>

                <div className="col-lg-3" style={{ padding: '1% 0%' }}>
                    <SideBar />
                </div>


            </div>

        </div>
    )
}

export default BlogPosts
