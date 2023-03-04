import { lazy } from 'react'
import MainLayout from '../Components/AdminHome/MainLayout'
import AdminProtectCheck from './AdminProtectCheck'

const AdminDashboard = lazy(() => import('../Pages/Protected/AdminDashboard'))
const AdminReportList = lazy(() => import('../Pages/Protected/AdminReportList'))
const AdminAgentList = lazy(() => import('../Pages/Protected/AdminAgentList'))
const AdminUserList = lazy(() => import('../Pages/Protected/AdminUserList'))

export const ProtectedAdminRoutes = [
    {path: "/admin", element: <MainLayout />, children: [
        {path: "home", element: <AdminDashboard />},    
        {path: "reportlist", element: <AdminReportList />},
        {path: "agentlist", element: <AdminAgentList />},
        {path: "userlist", element: <AdminUserList />},
    ]}
]


