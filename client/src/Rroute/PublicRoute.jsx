import { lazy } from "react"
import { Navigate } from "react-router-dom"

const UserLogin = lazy(() => import('../Pages/Public/UserLogin')) 

export const PublicRoutes = [
    {path: "/login", element: <UserLogin />},
    // {path: "/signup", element: <UserSignup />},
    // {path: "/admin/login", element: <AdminLogin />},
    // {path: "/admin/signup", element: <AdminSignup />},
    {path: "*", element: <Navigate to="/login" replace />}
]


