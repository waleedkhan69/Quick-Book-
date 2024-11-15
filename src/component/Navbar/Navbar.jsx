import { Fragment, useState } from 'react';
import logo from '../../assets/NavbarImage/logo.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { navarry } from '../../ArrayData';
import { navitemarry } from '../../ArrayData';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Fragment>
      <nav className='flex justify-between items-center bg-yellow-50 p-3'>
        <div className='flex justify-between w-[70%]'>
          <div className='flex justify-center items-center w-48 gap-3'>
            <div className='h-8 w-8 cursor-pointer rounded-full'>
              <img
                src={logo}
                alt='logo'
                className='h-full w-full object-cover rounded-full'
              />
            </div>
            <h1 className='font-bold text-black'>quickbooks</h1>
          </div>
          <div className='flex justify-evenly gap-7 items-center'>
            {navarry.map((item) => (
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
                  <span className='font-normal'>{item.title}</span>
                  {item.icon && (
                    <span className='transform transition-transform duration-300 group-hover:rotate-180'>
                      {item.icon}
                    </span>
                  )}
                </Link>
                <span className='border-b-2 border-transparent w-0 group-hover:w-full transition-all duration-300 ease-out'></span>
                {isHovered && item.id === 1 && (
                  <div
                    className='absolute top-full mt-0  shadow-lg rounded-lg flex justify-evenly
                     items-center w-[1100px] h-[90vh] bg-yellow-400'
                  >
                    {navitemarry.map((navItem, index) => (
                      <div
                        key={index}
                        className='flex bg-gray-500  flex-col gap-4 px-4'
                      >
                        <h4 className='font-bold mb-2'>{navItem.Title}</h4>
                        <ul className='space-y-1'>
                          {Object.keys(navItem)
                            .filter((key) => key.startsWith('p'))
                            .map((key, idx) => (
                              <li
                                key={idx}
                                className='text-gray-700 hover:text-green-500'
                              >
                                <Link
                                  to={navItem[key].link}
                                  onClick={() => setIsHovered(false)} // Close the popup on click
                                >
                                  {navItem[key].name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
          <p className='font-medium flex justify-center items-center gap-2 relative'>
            Talk to Sales: 1-855-443-4797 <IoIosArrowDown />
          </p>
          <button className='flex group justify-center font-semibold hover:bg-gray-700 hover:text-white items-center gap-4 border-black border-2 px-4 py-2'>
            Sign In
            <IoIosArrowDown className='group-hover:rotate-180 duration-200' />
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
