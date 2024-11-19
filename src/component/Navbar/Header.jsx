import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    'Supplier',
    'Collaborator',
    'Purchase Order',
    'Receive Purchase Order',
    'Quote Estimate',
    'Invoice',
    'Sales Person',
    'Schedule Item to be Invoiced',
    'Write Check',
    'Contract',
    'Account',
    'Pay / Receive',
  ];

  return (
    <div className='payback mb-4'>
      <nav className='container mx-auto px-4 py-2 relative overflow-hidden'>
        {/* Header Title */}
        <div className='flex justify-between items-center'>
          <h1 className='text-white text-2xl font-bold'>Supplier Management</h1>
        </div>

        {/* Continuously Scrolling Links */}
        <div className='mt-4 relative overflow-hidden'>
          <div className='flex animate-marquee space-x-8'>
            {/* Duplicate the links for seamless scrolling */}
            {links.concat(links).map((link, index) => (
              <Link
                key={index}
                to={`/${link.toLowerCase().replace(/ /g, '-')}-screen`}
                className='text-white hover:text-green-200 whitespace-nowrap'
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
