
import AdminCreateBtn from "../../Components/AdminHome/AdminCreateBtn"
import AgentTable from "../../Components/AdminHome/AgentTable"

const AdminAgentList = () => {
  return (
    <div className='flex flex-col mt-12 md:mt-5 md:ml-40 p-2'>
      <AdminCreateBtn />
      <AgentTable />
    </div>
  )
}

export default AdminAgentList