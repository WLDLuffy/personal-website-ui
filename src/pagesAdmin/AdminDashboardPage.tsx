import React, { FC } from 'react';
import AdminSideBar from '../components/AdminComponents/AdminSideBar';
import Layout from '../components/Layout';
import TextEditor from '../features/TextEditor';
import '../css/admin.css'

interface IAdminDashboardPageProps {


};

const AdminDashboardPage: FC<IAdminDashboardPageProps> = () => {
    return (
        <AdminSideBar>
            <Layout>
                <TextEditor />
            </Layout>
        </AdminSideBar>
    )
}

export default AdminDashboardPage
