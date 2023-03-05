import { Outlet } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import SideNav from './SideNav'

const MainLayout = () => {
  return (
    <>
      <div className='hidden md:block'>
        <SideNav>
          <Outlet />
        </SideNav>
      </div>
      <div className='md:hidden'>
        <HamburgerMenu>
          <Outlet />
        </HamburgerMenu>
      </div>

    </>
  )
}

export default MainLayout