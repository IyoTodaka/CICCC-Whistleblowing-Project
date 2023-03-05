import { lazy } from "react"

const UserHome = lazy(() => import('../Pages/Protected/UserHome'))

export const ProtectedUserRoutes = [
    {path: "/home", element: <UserHome />},
]