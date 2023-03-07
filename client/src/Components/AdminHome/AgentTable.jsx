import { useState } from "react"

import { agentList } from "../../data/agentList"
import { upArrow, downArrow } from "../AdminHome/tableArrow"

const AgentTable = () => {
    const [idSort, setIdSort] = useState(false)
    const [roleSort, setRoleSort] = useState(false)
    const [nameSort, setNameSort] = useState(false)
    const [createdSort, setCreatedSort] = useState(false)

    return (    
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
            <table className="w-full text-sm text-left text-gray-500 table-fixed">
                <thead className="text-sm md:text-base text-center text-gray-700 bg-gray-200 ">
                    <tr>
                        <th onClick={() => setIdSort(!idSort)} scope="col" className="cursor-pointer px-3 py-2 md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Agent ID
                                {idSort? upArrow: downArrow}
                            </div>
                        </th>
                        <th onClick={() => setRoleSort(!roleSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-40 hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Role
                                {roleSort? upArrow: downArrow}
                            </div>                          
                        </th>
                        <th onClick={() => setNameSort(!nameSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-40  hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Name
                                {nameSort? upArrow: downArrow}
                            </div>
                        </th>
                        <th onClick={() => setCreatedSort(!createdSort)} scope="col" className="cursor-pointer px-3 py-2  md:py-3 w-40  hover:bg-gray-300">
                            <div className='flex items-center justify-center'>
                                Created
                                {createdSort? upArrow: downArrow}
                            </div>                           
                        </th>
                    </tr>
                </thead>
                <tbody>
                {agentList.length > 0 && 
                    agentList.map(eachAgent => (
                        <tr className="bg-white border-b text-gray-900 text-center cursor-pointer hover:bg-gray-100" key={eachAgent._id}>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachAgent._id}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachAgent.role}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachAgent.name}
                            </td>
                            <td scope="row" className="px-3 py-4 whitespace-nowrap overflow-hidden text-ellipsis">
                                {eachAgent.created}
                            </td>
                        </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AgentTable