import { lazy } from "react"
import { Navigate } from "react-router-dom"

const UserLogin = lazy(() => import('../Pages/Public/UserLogin')) 
const AdminLogin = lazy(() => import('../Pages/Public/AdminLogin')) 

export const PublicRoutes = [
    {path: "/", element: <UserLogin />},
    {path: "/admin/login", element: <AdminLogin />},
    // {path: "/signup", element: <UserSignup />},
    // {path: "/admin/signup", element: <AdminSignup />},
    
    {path: "*", element: <Navigate to="/" replace />}
]


