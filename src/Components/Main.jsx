import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import profile from '../assets/image.jpg'

const Main = () => {
  return (
    <div className='w-full h-screen pr-4'>
      <div className=" bg-gray-50 shadow-2xl w-full h-13 p-2 flex justify-between items-center">
             
        {/* search-bar */}
        <div className=" flex bg-gray-300 rounded-xl items-center p-2 gap-2 ">
          <h1><SearchIcon/> </h1>
          <input type="text" placeholder='Search...'  className=' border-none outline-none'/>
          
        </div>

        {/* profile-notification */}
        <div className=" flex gap-8 items-center">
          {/* notification */}
          <div className=" relative">
            <h1 className='absolute bg-red-700 w-4 h-4 items-center flex justify-center text-white text-[10px] font-bold right-0 rounded-full '>10</h1>
            <NotificationsIcon/>
          </div>

          {/* profile */}
          <div className=" flex gap-3 items-center">
            <img src={profile} alt=""  className=' w-8 h-8 rounded-full'/>
            <div className=" flex flex-col m-0 leading-4">
              <h1 className='text-gray-950'> Bawa Ernest</h1>
              <p className='text-gray-600'>Senior Developer</p>
            </div>
          </div>



        </div>
      
      </div>
 
    </div>
  )
}

export default Main