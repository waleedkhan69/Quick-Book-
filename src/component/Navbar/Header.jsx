import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // QuickBooks color reference
  const quickBooksGreen = 'bg-[#2ca01c]';

  return (
    <div className={`${quickBooksGreen} mb-4`}>
      <nav className='container mx-auto p-4'>
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
          <Link
            to='/supplier-screen'
            className='text-white hover:text-green-200'
          >
            Supplier
          </Link>
          <Link
            to='/CollaboratorScreen'
            className='text-white hover:text-green-200'
          >
            Collaborator
          </Link>
          <Link
            to='/PurchaseOrderScreen'
            className='text-white hover:text-green-200'
          >
            Purchase Order
          </Link>
          <Link to='/receive-items' className='text-white hover:text-green-200'>
            Receive Purchase Order
          </Link>
          <Link
            to='/quote-estimate-screen'
            className='text-white hover:text-green-200'
          >
            Quote Estimate
          </Link>
        </div>

        {/* Mobile Links Section */}
        {isMobileMenuOpen && (
          <div className='lg:hidden mt-4 space-y-4'>
            <Link
              to='/supplier-screen'
              className='block text-white hover:text-green-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Supplier
            </Link>
            <Link
              to='/CollaboratorScreen'
              className='block text-white hover:text-green-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collaborator
            </Link>
            <Link
              to='/PurchaseOrderScreen'
              className='block text-white hover:text-green-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Purchase Order
            </Link>
            <Link
              to='/receive-items'
              className='block text-white hover:text-green-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Receive Purchase Order
            </Link>
            <Link
              to='/quote-estimate-screen'
              className='block text-white hover:text-green-200'
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quote Estimate
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
