import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navLinkClass =
    "transition ease-in-out duration-300 text-sm text-secondary py-1 px-3 rounded font-medium hover:bg-secondary hover:text-primary";

  const menuItems = [
    {
      name: 'Home', path: '/'
    },
    {
      name: 'Register', path:'/register'
    },
    {
      name: 'About us', path:'/about-us'
    }
  ]
  const handleNavbarClick = () => setIsNavbarOpen(prevState => !prevState);

  return (
    <div className="navbar shadow-md md:pb-5 fixed w-full bg-white z-10">
      <div className="container pt-4">
        <button
          className="menu-icon flex items-center cursor-pointer md:hidden text-3xl"
          onClick={handleNavbarClick}
        >
          {/*Menu Icon for mobile*/}
          <IoMenuSharp />
        </button>

        {/* Mobile Navigation Links */}
        <nav
          className={`flex flex-col gap-2 mt-4 md:hidden transition-all duration-300 ${
            isNavbarOpen ? "opacity-100 max-h-96 pb-3 " : "opacity-0 max-h-0"
          }`}
        >
         {
          menuItems.map((item, index)=>(<Link key={index} to={item.path} className={navLinkClass}>{item.name}</Link>))
         }
        </nav>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex flex-row gap-4 items-center">
            {
          menuItems.map((item, index)=>(<li key={index}><Link to={item.path} className={navLinkClass}>{item.name}</Link></li>))
         }
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
