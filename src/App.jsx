import React from 'react'
import Navbar from './Navbar';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div className=''>
    <div className=" flex gap-3">
      <Sidebar/>
        <Main/>

      </div>
    
    </div>
  )
}

export default App