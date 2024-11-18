import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // QuickBooks color reference
  const quickBooksGreen = 'bg-[#2ca01c]';

  return (
    <div className={` ${quickBooksGreen} mb-4`}>
      <nav className='container mx-auto px-4 py-2'>
        {/* Header Top Section */}
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-2xl font-bold'>Supplier Management</h1>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            className='text-white text-2xl lg:hidden focus:outline-none'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Main Links Section for Large Screens */}
        <div className='hidden lg:flex justify-center items-center space-x-8 mt-4'>
          {['Supplier', 'Collaborator', 'Purchase Order', 'Receive Purchase Order', 'Quote Estimate', 'Invoice', 'Sales Person', 'Schedule Item to be Invoiced', 'Write Check', 'Contract', 'Account', 'Pay / Receive'].map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase().replace(/ /g, '-')}-screen`}
              className='text-white hover:text-green-200'
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Mobile Links Section */}
        {isMobileMenuOpen && (
          <div className='lg:hidden mt-4 space-y-4'>
            {['Supplier', 'Collaborator', 'Purchase Order', 'Receive Purchase Order', 'Quote Estimate', 'Invoice', 'Sales Person', 'Schedule Item to be Invoiced', 'Write Check', 'Contract', 'Account', 'Pay / Receive'].map((link, index) => (
              <Link
                key={index}
                to={`/${link.toLowerCase().replace(/ /g, '-')}-screen`}
                className='block text-white hover:text-green-200'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
