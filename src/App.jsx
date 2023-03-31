import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';

function App() {
  const [cart, setCart] = useState([])

  const handleAddToCart = (details) => {
    const newCart =[...cart, details];
    setCart(newCart)
  }

  return (
    <div className="App container mx-auto">
      <Header></Header>
      <div className="grid grid-cols-12  gap-7">
        <div className='col-span-8'>
          <Home handleAddToCart={handleAddToCart}></Home>
        </div>
        <div className='col-span-4'>
          <SideBar cart={cart}></SideBar>
        </div>
      </div>
    </div>
  )
}

export default App;