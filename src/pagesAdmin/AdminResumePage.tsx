import React, { FC } from 'react';
import Layout from '../components/Layout';
import AdminSideBar from '../components/AdminComponents/AdminSideBar';

interface IAdminResumePageProps {

}

const AdminResumePage: FC<IAdminResumePageProps> = () => {
    return (
        <AdminSideBar>
            <Layout>
                <div style={{ textAlign: 'center' }}>

                </div>
            </Layout>
        </AdminSideBar>
    )
}

export default AdminResumePage
