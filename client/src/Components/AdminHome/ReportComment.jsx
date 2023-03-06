import React from 'react'

const ReportComment = () => {
  return (
    <div className='p-2 bg-gray-300 rounded-lg'>
        <div className='flex items-center'>
        <div className='font-bold'>Iyo Todaka</div>
        <div className='text-gray-500 text-xs ml-5'>Posted: 2days ago</div>
        </div>
        <div className='mt-2'>Coment body</div>
    </div>
  )
}

export default ReportComment