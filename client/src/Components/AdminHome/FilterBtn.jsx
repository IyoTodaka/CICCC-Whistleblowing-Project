import React from 'react'

const FilterBtn = ({ setIsFilterOpen }) => {
    const { open, toggle } = setIsFilterOpen

    // const displayFilterModal = () => {
    //     setIsOpen()
    // }

  return (
    <button onClick={open} className='flex items-center justify-center font-bold bg-gray-500 rounded-lg py-2 px-4 text-white w-fit hover:bg-gray-200 hover:text-gray-700 tarnsition duration-100 self-end'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 mr-2 mb-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
        Filter
    </button>
  )
}

export default FilterBtn