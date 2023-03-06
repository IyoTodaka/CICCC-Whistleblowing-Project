import ReportTable from '../../Components/AdminHome/ReportTable'
import FilterBtn from '../../Components/AdminHome/FilterBtn'

import { useToggle } from '../../Components/AdminHome/Hooks/useToggle'
import FilterModal from '../../Components/AdminHome/FilterModal'
import ReportDetailModal from '../../Components/AdminHome/ReportDetailModal'

const AdminReportList = () => {
  const [isFilterOpen, setIsFilterOpen] = useToggle()
  const [isDetailOpen, setIsDetailOpen] = useToggle()

  return (
    <div className='flex flex-col mt-12 md:mt-5 md:ml-40 p-2'>
      <FilterBtn setIsFilterOpen={setIsFilterOpen} />
      <ReportTable setIsDetailOpen={setIsDetailOpen}/>
      {isFilterOpen && <FilterModal setIsFilterOpen={setIsFilterOpen}/>}
      {isDetailOpen && <ReportDetailModal setIsDetailOpen={setIsDetailOpen}/>}
    </div>
  )
}

export default AdminReportList

