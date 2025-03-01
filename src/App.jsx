import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Order from "./Pages/Order"



import './index.css' 


const App = () => {

  

 
  return (
    <div className="">

        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Order/>}/>

          <Route/>

        </Routes>

    </div>
        

       
    
  )
}

export default App