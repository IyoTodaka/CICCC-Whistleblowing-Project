import { lazy } from 'react'
import MainLayout from '../Components/AdminHome/MainLayout'
import AdminProtectCheck from './AdminProtectCheck'

const AdminDashboard = lazy(() => import('../Pages/Protected/AdminDashboard'))
const AdminReportList = lazy(() => import('../Pages/Protected/AdminReportList'))
const AdminAgentList = lazy(() => import('../Pages/Protected/AdminAgentList'))
const AdminUserList = lazy(() => import('../Pages/Protected/AdminUserList'))

export const ProtectedAdminRoutes = [
    {path: "*", element: <MainLayout />, children: [
        {path: "admin", element: <AdminProtectCheck />, children: [
            {path: "admin/home", element: <AdminDashboard />},    
            {path: "admin/reportlist", element: <AdminReportList />},
            {path: "admin/agentlist", element: <AdminAgentList />},
            {path: "admin/userlist", element: <AdminUserList />},
        ]}
    ]}
]


