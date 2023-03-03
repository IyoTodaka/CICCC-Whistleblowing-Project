import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

  return (
    <>       
        <button onClick={() => setIsOpen(true)} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-40 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 flex flex-col justify-between overflow-y-auto bg-gray-200 dark:bg-gray-800">
                <div>
                    <div className='flex flex-col justify-center items-center mb-8 mt-5'>
                        {/* <p className='font-bold mb-3'>Logo</p> */}
                        <p className='font-bold text-2xl'>Admin</p>
                    </div>
                    <ul className="flex flex-col gap-3 items-center">
                        <li onClick={() => navigate('/admin/home')}>
                            <span className="font-bold">Dashboard</span>                            
                        </li>
                        <li onClick={() => navigate('/admin/reportlist')}>
                            <span className="font-bold">Report list</span>
                        </li>
                        <li onClick={() => navigate('/admin/agentlist')}>
                            <span className="font-bold">Agent List</span>
                        </li>
                        <li onClick={() => navigate('/admin/userlist')}>
                            <span className="font-bold">User List</span>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col justify-center mb-10'>
                    <p className='mb-5 text-center text-xl font-bold'>admin name</p>
                    <button type="button" className="flex justify-center py-1 text-gray-600 rounded-lg border-2 border-gray-300 hover:bg-gray-300 focus:outline-none">
                        <p>logout</p>
                    </button>
                </div>
            </div>
        </aside>
        <Outlet />
        {/* {isOpen && 
            <ul>
                <li></li>
            </ul>
        } */}
    </>
  )
}

export default SideNav