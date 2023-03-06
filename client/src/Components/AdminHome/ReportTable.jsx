import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { reportList } from '../../data/reportList'
import { upArrow, downArrow } from "../AdminHome/tableArrow"
import { setDetail } from '../../redux/slicers/reportDetailSlice'
 
const ReportTable = ({ setIsDetailOpen }) => {
  const dispatch = useDispatch()
  const [idSort, setIdSort] = useState(false)
  const [statusSort, setStatusSort] = useState(false)
  const [subjectSort, setSubjectSort] = useState(false)
  const [agentSort, setAgentSort] = useState(false)
  const [createdSort, setCreatedSort] = useState(false)
  const [updatedSort, setUpdatedSort] = useState(false)

  const { open } = setIsDetailOpen

  const location = useLocation()
  // console.log(location.state);

  const handleClick = (eachReport) => {
    open()
    dispatch(setDetail(eachReport))
  }

  return (    
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
          <table className="w-full text-sm text-left text-gray-500 table-fixed">
              <thead className="text-sm md:text-base text-center text-gray-700 bg-gray-200 ">
                  <tr>
                      <th onClick={() => setIdSort(!idSort)} scope="col" className="px-3 py-2 md:py-3 w-40 hover:bg-gray-300">
                        <div className='flex items-center justify-center'>
                          Report ID
                          {idSort? upArrow: downArrow}
                        </div>
                      </th>
                      <th onClick={() => setStatusSort(!statusSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                        <div className='flex items-center justify-center'>
                          Status
                          {statusSort? upArrow: downArrow}
                        </div>                          
                      </th>
                      <th onClick={() => setSubjectSort(!subjectSort)} scope="col" className="px-3 py-2  md:py-3 w-56 hover:bg-gray-300">
                        <div className='flex items-center justify-center'>
                          Sbject
                          {subjectSort? upArrow: downArrow}
                        </div>
                      </th>
                      <th onClick={() => setAgentSort(!agentSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                        <div className='flex items-center justify-center'>
                          Agent
                          {agentSort? upArrow: downArrow}
                        </div>                          
                      </th>
                      <th onClick={() => setCreatedSort(!createdSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                        <div className='flex items-center justify-center'>
                          Created
                          {createdSort? upArrow: downArrow}
                        </div>                           
                      </th>
                      <th onClick={() => setUpdatedSort(!updatedSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
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
                  <tr className="bg-white border-b text-gray-900 text-center hover:bg-gray-100" key={eachReport._id} onClick={() => handleClick(eachReport)}>
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
      </div>
  )
}

export default ReportTable