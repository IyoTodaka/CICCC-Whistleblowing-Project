import { useLocation } from 'react-router-dom'
import { reportList } from '../../data/reportList'

const ReportTable = () => {
  const location = useLocation()
  console.log(location.state);

  return (    
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg md:ml-40 mt-2">
          <table className="w-full text-sm text-left text-gray-500 table-fixed">
              <thead className="text-sm md:text-base text-center text-gray-700 bg-gray-200 ">
                  <tr>
                      <th scope="col" className="px-3 py-2  md:py-3 w-40">
                          Report ID
                      </th>
                      <th scope="col" className="px-3 py-2  md:py-3 w-40">
                          Status
                      </th>
                      <th scope="col" className="px-3 py-2  md:py-3 w-56">
                          Subject
                      </th>
                      <th scope="col" className="px-3 py-2  md:py-3 w-40">
                          Agent
                      </th>
                      <th scope="col" className="px-3 py-2  md:py-3 w-40">
                          Created
                      </th>
                      <th scope="col" className="px-3 py-2  md:py-3 w-40">
                          Updated
                      </th>
                  </tr>
              </thead>
              <tbody>
              {reportList.length > 0 && 
                reportList.map(eachReport => (
                  <tr className="bg-white border-b text-gray-900 text-center" key={eachReport._id}>
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