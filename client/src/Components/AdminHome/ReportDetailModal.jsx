import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setDetail } from '../../redux/slicers/reportDetailSlice'
import ReportComment from './ReportComment'
import { downArrow } from '../AdminHome/tableArrow'

const ReportDetailModal = ({ setIsDetailOpen }) => {
  const reportDetail = useSelector((state) => state.reportDetail.detailInfo)
  const dispatch = useDispatch()
  const { close } = setIsDetailOpen

  const handleClose = () => {
    dispatch(setDetail(null))
    close()
  }

  const handleSubmit = () => {

  }

  return (
    <div className="flex justify-center items-center h-screen fixed inset-0 z-50 outline-none focus:outline-none">
      <div
          className="overlay absolute inset-0 z-0 bg-gray-600 opacity-80"
      ></div>
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col p-3 w-11/12 max-h-[calc(100vh-50px)] md:w-1/2 bg-white outline-none focus:outline-none md:px-8 md:py-6 overflow-y-scroll">
        <div className='flex justify-between'>
          <form>
            <div className='flex justify-center items-center border-2 border-gray-500 rounded-lg py-1 px-2 mb-3'>
              <p>{reportDetail.status}</p>
              {downArrow}
            </div>
          </form>
          <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-1'>
            <div className='text-sm font-bold'>ID:<span className='text-sm font-medium'> {reportDetail._id}</span></div>
            <div className='text-sm font-bold'>Created:<span className='text-sm font-medium'> {reportDetail.postedDate}</span></div>
            <div className='text-sm font-bold'>Agent:<span className='text-sm font-medium'> {reportDetail.agent}</span></div>
            <div className='text-sm font-bold'>Category:<span className='text-sm font-medium'> {reportDetail.category}</span></div>
          </div>
          <div className='flex flex-col border-2 border-gray-400 rounded-lg my-5 p-3'>
            <div className='text-sm'>Sender: {reportDetail.createdUser.username}</div>
            <div className='text-2xl font-bold my-2'>{reportDetail.subject}</div>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-sky-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
              </svg>
              {reportDetail.file}
            </div>
            <div className='mt-8 text-lg'>{reportDetail.description}</div>
          </div>
          <div className='underline mb-2'>Replies</div>
          <div className='flex flex-col gap-2'>
            <ReportComment />
            <ReportComment />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <textarea className='border-2 border-gray-500 rounded-lg p-2 w-full mt-6' placeholder='Write comment...' />
            <button className='flex items-center justify-center font-bold bg-sky-600 rounded-lg py-2 px-4 mt-2 text-white w-fit hover:bg-sky-200 hover:text-gray-700 tarnsition duration-100 self-end md:text-lg md:px-6 self-end'>
              Send
            </button>
          </form>
          <div className='text-xs mt-4 self-end'>Updated: {reportDetail.updatedDate}</div>
        </div>
      </div>
    </div>
  )
}

export default ReportDetailModal