import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';

function App() {

  return (
    <div className="App container mx-auto">
      <Header></Header>
      <div className="grid grid-cols-4 gap-4">
        <div className='md:col-span-3 col-span-1'>
          <Home></Home>
        </div>
        <div className='md:col-span-1 col-span-1'>
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  )
}

export default App;