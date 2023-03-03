import { Outlet } from 'react-router-dom'
import SideNav from './SideNav'

const MainLayout = () => {
  return (
    <SideNav>
        <Outlet />
    </SideNav>
  )
}

export default MainLayout