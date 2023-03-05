import React from 'react'

const AdminCreateBtn = () => {
  return (
    <button className='flex items-center justify-center font-bold bg-gray-500 rounded-lg py-2 px-4 text-white w-fit hover:bg-gray-200 hover:text-gray-700 tarnsition duration-100 self-end'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 mr-1 mb-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Create
    </button>
  )
}

export default AdminCreateBtn 