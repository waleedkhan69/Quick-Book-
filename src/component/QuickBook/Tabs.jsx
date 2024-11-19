import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
// import '../../src/Background.css';

const Tabs = ({ tabs = [], activeTab, onTabClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log('Tabs:', tabs); // Debugging to ensure tabs is populated

  return (
    <div className='relative '>
      {/* Menu Icon for Mobile */}
      <div className='sm:hidden flex justify-end'>
        <button
          className='text-xl p-2 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Tabs */}
      <div
        className={`absolute sm:relative top-full sm:top-0 left-0 w-full sm:w-auto bg-white sm:bg-transparent z-10 ${
          isMenuOpen ? 'block' : 'hidden'
        } sm:flex sm:items-center sm:space-x-4`}
      >
        {tabs?.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              onTabClick(tab);
              setIsMenuOpen(false); // Close menu on tab click
            }}
            className={`block sm:inline-block px-4 py-2 sm:py-0 text-sm sm:text-base font-medium transition ${
              activeTab === tab
                ? 'text-green-500 border-b-2 sm:border-none border-green-500'
                : 'text-gray-700 hover:text-green-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

Tabs.defaultProps = {
  tabs: [],
};

export default Tabs;
