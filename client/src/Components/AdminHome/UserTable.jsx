import { useState } from 'react'

import { userInfo } from '../../data/userInfo'
import { upArrow, downArrow } from "../AdminHome/tableArrow"


const UserTable = () => {
    const [idSort, setIdSort] = useState(false)
    const [departmentSort, setDepartmentSort] = useState(false)
    const [nameSort, setNameSort] = useState(false)
    const [createdSort, setCreatedSort] = useState(false)
    const [lastPostedSort, setLastPostedSort] = useState(false)

    return (    
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
            <table className="w-full text-sm text-left text-gray-500 table-fixed">
                <thead className="text-sm md:text-base text-center text-gray-700 bg-gray-200 ">
                    <tr>
                        <th onClick={() => setIdSort(!idSort)} scope="col" className="px-3 py-2 md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                User ID
                                {idSort? upArrow: downArrow}
                            </div>
                        </th>
                        <th onClick={() => setDepartmentSort(!departmentSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Department
                                {departmentSort? upArrow: downArrow}
                            </div>                          
                        </th>
                        <th onClick={() => setNameSort(!nameSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Name
                                {nameSort? upArrow: downArrow}
                            </div>
                        </th>
                        <th onClick={() => setCreatedSort(!createdSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Created
                                {createdSort? upArrow: downArrow}
                            </div>                           
                        </th>
                        <th onClick={() => setLastPostedSort(!lastPostedSort)} scope="col" className="px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Posted
                                {lastPostedSort? upArrow: downArrow}
                            </div>                           
                        </th>
                    </tr>
                </thead>
                <tbody>
                {userInfo.length > 0 && 
                    userInfo.map(eachUser => (
                        <tr className="bg-white border-b text-gray-900 text-center hover:bg-gray-100" key={eachUser._id}>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachUser._id}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachUser.department}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachUser.username}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachUser.created}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachUser.lastPosted}
                            </td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable