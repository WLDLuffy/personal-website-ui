import React, { FC, useState, useEffect } from 'react';
import AdminSideBar from '../components/AdminComponents/AdminSideBar';
import Layout from '../components/Layout';
import TextEditor from '../features/TextEditor';
import Header from '../components/AdminComponents/AdminBlogPostComponents/Header';
import '../css/admin.css';
import { submitBlogPost } from '../api/blog.api';
import { IBlogValues } from '../constants/IFormValues.constants';

interface IAdminBlogPageProps {

}

const AdminBlogPage: FC<IAdminBlogPageProps> = () => {
    const [currentForm, setCurrentForm] = useState<any>(IBlogValues)

    const handlePublish = () => {
        submitBlogPost(currentForm).then((res: any) => {
            console.log('post published!')
            setCurrentForm(IBlogValues)
        }).catch((e) => {
            console.error(e)
        })
    }

    console.log(currentForm)

    return (
        <AdminSideBar>
            <Layout>
                <Header />
                <div className="container-fluid" style={{ textAlign: 'center' }}>
                    <div className='row'>
                        <div className="col-lg-4">
                            <div className="input-group mb-3">
                                <input placeholder="Post Title" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => { setCurrentForm({ ...currentForm, Title: e.target.value }) }} value={currentForm.Title} />
                            </div>
                            <div className="input-group mb-3">
                                <input placeholder="Post Description" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div style={{ marginBottom: '7%' }}>
                                <TextEditor value={currentForm.PostContent} height={'18rem'} onChange={(e) => { setCurrentForm({ ...currentForm, PostContent: e }) }} />
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={handlePublish}>Publish</button>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </AdminSideBar>
    )
}

export default AdminBlogPage
