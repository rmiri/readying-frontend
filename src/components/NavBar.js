import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="flex items-center p-4 shadow bg-white w-screen">
            <Link to="/"><img src='images/logo.png' alt="logo" className="h-10"></img></Link>
            <div className="flex justify-end w-full">
            <Link to="/questions" className=" text-center text-gray-800 hover:text-orange-600 px-4 py-2 m-2">Questions</Link>
            <Link to="/about" className=" text-center text-gray-800 hover:text-orange-600  px-4 py-2 m-2" >About</Link>
            {/* <Link to="/login">Login</Link> */}
            </div>
        </nav>
    )
}

export default NavBar;
