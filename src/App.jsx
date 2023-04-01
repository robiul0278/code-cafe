import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [cart, setCart] = useState([]);
  const [time, setTime] = useState([]);

  const handleAddToCart = (details) => {
    const newCart = [...cart, details];
    setCart(newCart);
    toast("Blog item added successfully!🫡");
  };

  const handleReadTime = (read) => {
      const newTime = [...time, read];
      setTime(newTime);

  };

  return (
    <div className="App container mx-auto">
      <Header></Header>
      <div className="grid md:grid-cols-12  md:gap-7">
        <div className="md:col-span-8">
          <Home
            handleAddToCart={handleAddToCart}
            handleReadTime={handleReadTime}
          ></Home>
          <ToastContainer />
        </div>
        <div className="md:col-span-4">
          <SideBar cart={cart} time={time}></SideBar>
        </div>
      </div>
    </div>
  );
}

export default App;
