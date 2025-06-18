import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';


const Sidebar = () => {
  return (
    <div className='h-screen bg-green-950  w-1/6 p-4 '>
      <div className="flex justify-between text-white font-bold">
        <h1 className='text-3xl'>BK</h1>
        <h1 className='bg-green-500 rounded-full p-1 w-10 h-10 flex items-center justify-center'><MenuIcon/></h1>

      </div>

      <div className="">
        <div className="">
          <h1> <DashboardIcon/></h1>
          <h1>Dashboard</h1>
        </div>

        <div className="">
          <div className=" flex text-white gap-3">
            <CardTravelIcon/>
            <h1>Finance</h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar