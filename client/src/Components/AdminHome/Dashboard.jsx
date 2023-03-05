import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center w-full'>
        <div className='flex flex-col items-center gap-5 w-full'>
            <Link to="/admin/reportlist" state={"dueToday"} className='py-3 px-4 mt-5 md:display-inline rounded-3xl shadow-lg w-80 md:w-1/2 h-fit bg-gray-200'>
                <div className='flex justify-between px-5'>
                    <p className=''>Due today</p>
                    <p className=''><span>2</span> items</p>
                </div>
            </Link>
            <Link to="/admin/reportlist" state={"backlog"} className='py-3 px-4 mt-5 md:display-inline rounded-3xl shadow-lg w-80 md:w-1/2 h-fit bg-gray-200'>
                <div className='flex justify-between px-5'>
                    <p className=''>Backlog</p>
                    <p className=''><span>2</span> items</p>
                </div>
            </Link>
            <Link to="/admin/reportlist" state={"updated"} className='py-3 px-4 mt-5 md:display-inline rounded-3xl shadow-lg w-80 md:w-1/2 h-fit bg-gray-200'>
                <div className='flex justify-between px-5'>
                    <p className=''>Updated</p>
                    <p className=''><span>2</span> items</p>
                </div>
            </Link>
            <Link to="/admin/reportlist" state={"inProgress"} className='py-3 px-4 mt-5 md:display-inline rounded-3xl shadow-lg w-80 md:w-1/2 h-fit bg-gray-200'>
                <div className='flex justify-between px-5'>
                    <p className=''>In progress</p>
                    <p className=''><span>2</span> items</p>
                </div>
            </Link>
            <Link to="/admin/reportlist" state={"closed"} className='py-3 px-4 mt-5 md:display-inline rounded-3xl shadow-lg w-80 md:w-1/2 h-fit bg-gray-200'>
                <div className='flex justify-between px-5'>
                    <p className=''>Closed</p>
                    <p className=''><span>2</span> items</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Dashboard