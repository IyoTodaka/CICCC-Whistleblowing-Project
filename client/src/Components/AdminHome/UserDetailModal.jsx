import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { reportList } from '../../data/reportList'
import { upArrow, downArrow } from './tableArrow'
import { useToggle } from './Hooks/useToggle'  
import { setUserDetail } from '../../redux/slicers/userDetailSlice'
import { setDetail } from '../../redux/slicers/reportDetailSlice'
import ReportDetailModal from './ReportDetailModal'

const UserDetailModal = ({ setIsDetailOpen }) => {
    const userDetail = useSelector(state => state.userDetail.detailInfo)
    const dispatch = useDispatch()
    const [idSort, setIdSort] = useState(false)
    const [statusSort, setStatusSort] = useState(false)
    const [subjectSort, setSubjectSort] = useState(false)
    const [agentSort, setAgentSort] = useState(false)
    const [createdSort, setCreatedSort] = useState(false)
    const [updatedSort, setUpdatedSort] = useState(false)

    const [isReportDetailOpen, setIsReportDetailOpen] = useToggle()
    const { open } = setIsReportDetailOpen
    const { close } = setIsDetailOpen

    const handleClose = () => {
        close()
        dispatch(setUserDetail(null))
    }

    const handleOpen = (eachReport) => {
        open()
        dispatch(setDetail(eachReport))
    }

  return (
    <>
        <div className="flex justify-center items-center h-screen fixed inset-0 z-50 outline-none focus:outline-none">
            <div
                className="overlay absolute inset-0 z-0 bg-gray-600 opacity-80"
            ></div>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col p-3 w-11/12 max-h-[calc(100vh-50px)] bg-white outline-none focus:outline-none md:px-8 md:py-6 overflow-y-scroll">
                <div className='flex justify-end'>
                    <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-3 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='text-sm md:text-base font-bold'>ID:<span className='text-sm font-medium'> {userDetail._id}</span></div>
                    <div className='text-sm md:text-base font-bold'>Department:<span className='text-sm font-medium'> {userDetail.department}</span></div>
                    <div className='text-xl md:text-3xl font-bold mt-1'>{userDetail.username}</div>
                </div>
                <div className='underline mt-4 mb-2'>All reports</div>
                <table className="w-full text-sm text-left text-gray-500 table-fixed">
                    <thead className="text-sm md:text-base text-center text-gray-700 bg-gray-200 ">
                        <tr>
                            <th onClick={() => setIdSort(!idSort)} scope="col" className="cursor-pointer px-3 py-2 md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Report ID
                                {idSort? upArrow: downArrow}
                            </div>
                            </th>
                            <th onClick={() => setStatusSort(!statusSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Status
                                {statusSort? upArrow: downArrow}
                            </div>                          
                            </th>
                            <th onClick={() => setSubjectSort(!subjectSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-56 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Sbject
                                {subjectSort? upArrow: downArrow}
                            </div>
                            </th>
                            <th onClick={() => setAgentSort(!agentSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Agent
                                {agentSort? upArrow: downArrow}
                            </div>                          
                            </th>
                            <th onClick={() => setCreatedSort(!createdSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Created
                                {createdSort? upArrow: downArrow}
                            </div>                           
                            </th>
                            <th onClick={() => setUpdatedSort(!updatedSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Updated
                                {updatedSort? upArrow: downArrow}
                            </div> 
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {reportList.length > 0 && 
                    reportList.map(eachReport => (
                        <tr className="bg-white border-b text-gray-900 text-center cursor-pointer hover:bg-gray-100" key={eachReport._id} onClick={() => handleOpen(eachReport)}>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachReport._id}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachReport.status}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachReport.subject}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachReport.agent}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachReport.postedDate}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachReport.updatedDate}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button type="button" className="flex justify-center py-1 px-3 mt-4 text-red-400 text-red font-bold rounded-lg border-2 border-red-400 transition duration-100 hover:bg-red-400 hover:text-white focus:outline-none self-start md:self-end">
                    <p>Delete User</p>
                </button>
            </div>
        </div>
        {isReportDetailOpen && <ReportDetailModal setIsReportDetailOpen={setIsReportDetailOpen}/>}
    </>
  )
}

export default UserDetailModal