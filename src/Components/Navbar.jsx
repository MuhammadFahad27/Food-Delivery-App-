import {  NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <nav className="bg-zinc-800 flex justify-between items-center
    sm:h-16 sm:p-4 h-16 fixed w-full z-10 top-0">

        <div className="flex items-center">
            <GiHamburgerMenu className="text-orange-600 text-3xl sm:hidden ml-2" />
            <img src={logo} alt="" className="sm:w-[100px] w-[50px] " />

        </div>

        <div className="text-white flex sm:gap-6 md:gap-10 ">
            <NavLink className="hidden sm:inline-block">Home</NavLink>
            <NavLink className="hidden sm:inline-block">Food</NavLink>
            <NavLink className="hidden sm:inline-block">Contact us</NavLink>
            <NavLink className="hidden sm:inline-block">Mobile-app</NavLink>
        </div>

        <div className="text-white flex sm:gap-5 sm:text-3xl gap-2 p-3   ">
            <CiSearch className="cursor-pointer text-3xl"/>
            <FaCartArrowDown className="cursor-pointer text-3xl" />
        </div>

    </nav>
  )
}

export default Navbar