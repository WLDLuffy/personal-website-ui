import React, { FC } from 'react';
import AdminSideBar from '../components/AdminSideBar'

interface IAdminDashboardPageProps {


};

const AdminDashboardPage: FC<IAdminDashboardPageProps> = () => {
    return (
        <div>
            <AdminSideBar />
        </div>
    )
}

export default AdminDashboardPage
