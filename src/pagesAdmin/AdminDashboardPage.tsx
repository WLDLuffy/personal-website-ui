import React, { FC } from 'react';
import AdminSideBar from '../components/AdminComponents/AdminSideBar';
import Layout from '../components/Layout';
import Header from '../components/AdminComponents/AdminDashboardComponents/Header';
import '../css/admin.css'

interface IAdminDashboardPageProps {


};

const AdminDashboardPage: FC<IAdminDashboardPageProps> = () => {
    return (
        <AdminSideBar>
            <Layout>
                <div style={{ textAlign: 'center' }}>
                    <Header />
                </div>
            </Layout>

        </AdminSideBar>
    )
}

export default AdminDashboardPage
