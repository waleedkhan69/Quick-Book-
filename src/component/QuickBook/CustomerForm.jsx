import React from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const CustomerForm = () => {
  return (
    <div className='p-4 space-y-4 bg-white shadow-md rounded-md'>
      <h2 className='text-lg font-semibold'>Customer Information</h2>

      {/* Dropdown for Customer Type */}
      <div>
        <label className='block text-sm font-medium'>Customer Type</label>
        <select className='w-full p-2 mt-1 border rounded-md'>
          <option>Business</option>
          <option>Homeowner</option>
          <option>Contractor</option>
        </select>
      </div>

      {/* Salutation */}
      <div>
        <label className='block text-sm font-medium'>Salutation</label>
        <input
          type='text'
          placeholder='e.g., Mr., Mrs.'
          className='w-full p-2 mt-1 border rounded-md'
        />
      </div>

      {/* First and Last Name */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div>
          <label className='block text-sm font-medium'>First Name</label>
          <input type='text' className='w-full p-2 mt-1 border rounded-md' />
        </div>
        <div>
          <label className='block text-sm font-medium'>Last Name</label>
          <input type='text' className='w-full p-2 mt-1 border rounded-md' />
        </div>
      </div>

      {/* Toggle Switch */}
      <div className='flex items-center'></div>
    </div>
  );
};

export default CustomerForm;
