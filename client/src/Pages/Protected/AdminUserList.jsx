
import UserTable from '../../Components/AdminHome/UserTable'
import { useToggle } from '../../Components/AdminHome/Hooks/useToggle'
import UserDetailModal from '../../Components/AdminHome/UserDetailModal'

const AdminUserList = () => {
  const [isDetailOpen, setIsDetailOpen] = useToggle()


  return (
    <div className='flex flex-col mt-16 md:ml-40 p-2'>
      <UserTable setIsDetailOpen={setIsDetailOpen}/>
      {isDetailOpen && <UserDetailModal setIsDetailOpen={setIsDetailOpen} />}
    </div>
  )
}

export default AdminUserList