import React from 'react'
import UserTable from '../../Components/AdminHome/UserTable'

const AdminUserList = () => {
  return (
    <div className='flex flex-col mt-16 md:ml-40 p-2'>
      <UserTable />
    </div>
  )
}

export default AdminUserList