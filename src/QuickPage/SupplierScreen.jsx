import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../src/Background.css';

function SupplierScreen() {
  const [insuranceDate, setInsuranceDate] = useState(null);
  const [insuranceFile, setInsuranceFile] = useState(null);

  const handleFileChange = (e) => {
    setInsuranceFile(e.target.files[0]);
  };

  return (
    <div className='payback container mx-auto p-4 sm:p-6 md:p-8'>
      <div className='bg-white opacity-90 px-12'>
        <h2 className='text-2xl font-bold mb-4'>Supplier Information</h2>

        {/* Basic Information Section */}
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
          <div>
            <label className='block text-gray-700 mb-2'>Name:</label>
            <input
              type='text'
              placeholder='Enter supplier name'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div className='bg-white'>
            <label className='block text-gray-700 mb-2'>Supplier ID:</label>
            <input
              type='text'
              placeholder='Enter supplier ID'
              className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
        </section>

        {/* Contact Information Section */}
        <section className='mb-6'>
          <h3 className='text-xl font-semibold mb-3'>Contact Information</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
              <label className='block text-gray-700 mb-2'>Phone:</label>
              <input
                type='tel'
                placeholder='Enter phone number'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Email:</label>
              <input
                type='email'
                placeholder='Enter email'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div className='sm:col-span-2 lg:col-span-1'>
              <label className='block text-gray-700 mb-2'>Address:</label>
              <textarea
                placeholder='Enter address'
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              ></textarea>
            </div>
          </div>
        </section>

        {/* Remarks Section */}
        <section className='mb-6'>
          <h3 className='text-xl font-semibold mb-3'>Remarks/Notes</h3>
          <textarea
            placeholder='Add any notes'
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          ></textarea>
        </section>

        {/* Products Supplied Section */}
        <section className='mb-6'>
          <h3 className='text-xl font-semibold mb-3'>Products Supplied</h3>
          {/* Placeholder for product list, ideally dynamically rendered */}
          <ul className='list-disc pl-5'>
            <li className='text-gray-600'>Product 1</li>
            <li className='text-gray-600'>Product 2</li>
          </ul>
        </section>

        {/* Insurance Information Section */}
        <section>
          <h3 className='text-xl font-semibold mb-3'>Insurance Information</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
              <label className='block text-gray-700 mb-2'>
                Insurance Expires On:
              </label>
              <DatePicker
                selected={insuranceDate}
                onChange={(date) => setInsuranceDate(date)}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>
                Attach Insurance Proof:
              </label>
              <input
                type='file'
                onChange={handleFileChange}
                className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              {insuranceFile && (
                <p className='mt-2 text-gray-500'>
                  Uploaded File: {insuranceFile.name}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SupplierScreen;
