import { useState } from 'react'
import DatePicker from './DatePicker'

const FilterModal = ({ setIsOpen }) => {
  const [reportId, setReportId] = useState("")
  const [backlog, setBacklog] = useState(false)
  const [inProgress, setInProgress] = useState(false)
  const [closed, setClosed] = useState(false)
  const [updated, setUpdated] = useState(false)
  const { close } = setIsOpen

  const handleFilter = () => {

  }

  return (
    <div className="flex justify-center items-center h-screen fixed inset-0 z-50 outline-none focus:outline-none">
        <div
            className="overlay absolute inset-0 z-0 bg-gray-600 opacity-80"
        ></div>
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col p-3 my-5 w-11/12 md:w-1/2 bg-white outline-none focus:outline-none md:px-8 md:py-6 overflow-y-scroll">
          <div className='flex justify-end'>
            <svg onClick={close} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <form className='flex flex-col' onSubmit={handleFilter}>
            <div className='flex items-center'>
              <label className="text-gray-700 text-sm md:text-lg font-bold my-2 mr-2">
                ID: 
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="reportId"
                onChange={(e) => setReportId(e.target.value)}
                value={reportId}
              />
            </div>
            <label className="text-gray-700 text-sm md:text-lg font-bold my-2 mr-2 mt-5">
              Status: 
            </label>
            <div className='flex flex-col'>
              <div className='flex items-center gap-6'>
                <label className="block text-gray-700 text-sm md:text-lg font-bold flex items-center">
                    <input type="checkbox" value={backlog} onChange={() => setBacklog(backlog)} className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    Backlog
                </label>
                <label className="block text-gray-700 text-sm md:text-lg font-bold flex items-center">
                    <input type="checkbox" value={inProgress} onChange={() => setInProgress(inProgress)} className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    In Progress
                </label>
                <label className="block text-gray-700 text-sm md:text-lg font-bold flex items-center">
                    <input type="checkbox" value={closed} onChange={() => setClosed(closed)} className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    Closed
                </label>
              </div>              
              <div className='flex items-center gap-6 mt-3'>
                <label className="block text-gray-700 text-sm md:text-lg font-bold flex items-center">
                    <input type="checkbox" value={updated} onChange={() => setUpdated(updated)} className="w-4 h-4 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    Updated
                </label>              
              </div>
              <label className="text-gray-700 text-sm md:text-lg font-bold my-2 mr-2 mt-5">
                Subtitle: 
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="reportId"
                onChange={(e) => setReportId(e.target.value)}
                value={reportId}
              />           
              <label className="text-gray-700 text-sm md:text-lg font-bold my-2 mr-2 mt-5">
                Created: 
              </label>
              <div className='flex items-center'>
                <DatePicker /> <span className='mx-3'>to</span> <DatePicker />
              </div>

              <label className="text-gray-700 text-sm md:text-lg font-bold my-2 mr-2 mt-5">
                Updated: 
              </label>
              <div className='flex items-center'>
                <DatePicker /> <span className='mx-3'>to</span> <DatePicker />
              </div>
            </div>

            <button className='flex items-center justify-center font-bold bg-sky-600 rounded-lg py-2 px-4 text-white w-fit hover:bg-sky-200 hover:text-gray-700 tarnsition duration-100 self-end mt-10 md:text-lg md:px-6'>
              Apply
            </button>
          </form>
        </div>
    </div>

  )
}

export default FilterModal