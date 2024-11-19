import React, { Fragment, useState } from 'react';
import logo from '../../assets/NavbarImage/logo.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi'; // Menu and Close icons
import { Link } from 'react-router-dom';
import { navarry } from '../../ArrayData'; // Ensure this is correctly imported

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  console.log(navarry); // Debugging to ensure navarry is populated

  return (
    <Fragment>
      <nav className='flex justify-between items-center bg-yellow-50 p-3'>
        <div className='flex items-center w-full justify-between'>
          {/* Logo Section */}
          <div className='flex items-center gap-3'>
            <div className='h-8 w-8 cursor-pointer rounded-full'>
              <img
                src={logo}
                alt='logo'
                className='h-full w-full object-cover rounded-full'
              />
            </div>
            <h1 className='font-bold text-black'>quickbooks</h1>
          </div>

          {/* Menu Icon for Mobile */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-2xl focus:outline-none'
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Nav Items for Desktop */}
          <div className='hidden md:flex justify-evenly gap-7 items-center'>
            {navarry?.map((item) => (
              <div
                key={item.id}
                className='relative flex flex-col items-center group'
                onMouseEnter={() => item.id === 1 && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link
                  to={item.link}
                  className='flex items-center gap-2 cursor-pointer group-hover:text-[#2CA01C]'
                >
                  <span className='font-semibold'>{item.title}</span>
                  {item.icon && (
                    <span className='transform transition-transform duration-300 group-hover:rotate-180'>
                      {item.icon}
                    </span>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Info and Buttons */}
        <div className='hidden md:flex justify-center items-center gap-4'>
          <button className='flex group w-32 justify-center font-semibold hover:bg-[#009688] hover:text-white ml-2 items-center gap-4 border-black border-[1px] px-4 py-3'>
            Sign In
            <IoIosArrowDown className='group-hover:rotate-180 duration-200' />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-0 left-0 w-full h-full bg-yellow-50 z-50 p-4 md:hidden'>
          <button
            onClick={() => setMenuOpen(false)}
            className='text-2xl absolute top-4 right-4 focus:outline-none'
          >
            <FiX />
          </button>
          <div className='flex flex-col items-center space-y-6 mt-16'>
            {navarry?.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className='text-lg font-semibold text-black'
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.title}
              </Link>
            ))}

            <button className='w-full  mt-2 px-4 text-black border-2 border-black rounded-md'>
              Sign In
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Navbar;
