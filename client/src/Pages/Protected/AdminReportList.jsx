import ReportTable from '../../Components/AdminHome/ReportTable'
import FilterBtn from '../../Components/AdminHome/FilterBtn'

import { useToggle } from '../../Components/AdminHome/Hooks/useToggle'
import FilterModal from '../../Components/AdminHome/FilterModal'

const AdminReportList = () => {
  const [isOpen, setIsOpen] = useToggle()

  return (
    <div className='flex flex-col mt-12 md:mt-5 md:ml-40 p-2'>
      <FilterBtn setIsOpen={setIsOpen} />
      <ReportTable />
      {isOpen && <FilterModal setIsOpen={setIsOpen}/>}
    </div>
  )
}

export default AdminReportList

