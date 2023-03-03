import { lazy } from 'react'

const AdminHome = lazy(() => import('../Pages/Protected/AdminHome'))

export const ProtectedAdminRoutes = [
    {path: "/admin/home", element: <AdminHome />},
    // {path: "admin/home", element: <Home />},
    // {path: "admin/reports", element: <ReportList />},
    // {path: "admin/agentlist", element: <AgentList />},
    // {path: "admin/userlist", element: <AdminUserList />},
]

// export const ProtectedRoutes = createBrowserRouter([
//   {path: "/admin", element: <ProtectedRouter />, children: [
//     {path: "home", element: <AdminHome />},
//     // {path: "admin/home", element: <Home />},
//     // {path: "admin/reports", element: <ReportList />},
//     // {path: "admin/agentlist", element: <AgentList />},
//     // {path: "admin/userlist", element: <AdminUserList />},
//   ]}  
// ])
