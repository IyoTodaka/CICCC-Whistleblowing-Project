import { useSelector } from "react-redux" 
import { Navigate, Outlet } from "react-router-dom"

const AdminProtectCheck = () => {
    const user = useSelector(state => state.userInfo.user)

    if(user.role === "admin"){
        return <Outlet />
    }else{
        return <Navigate to={"admin/login"} />
    }

}

export default AdminProtectCheck