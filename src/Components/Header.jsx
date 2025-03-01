import header from "../assets/header.png"
import { FaArrowRight } from "react-icons/fa";
const Header = () => {
  return (
  
      <div className="mt-20">
        <div className="relative p-3">
          <img src={header} alt="" className="xl:w-full xl:h-[490px] 2xl:h-[600px] 2xl:p-4"/>
          <div className="absolute bottom-6 left-5 xl:left-20 xl:bottom-6 2xl:bottom-12 ">
            <button className="bg-black text-white rounded p-1  sm:p-2 
            "> <FaArrowRight className="inline "/> About Me </button>
          </div>
        </div>
      </div>
    
  )
}

export default Header