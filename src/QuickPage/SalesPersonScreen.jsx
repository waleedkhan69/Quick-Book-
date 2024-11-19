import React, { useState } from 'react';
import '../../src/Background.css';

const SalesPersonScreen = () => {
  const [salesPersonData, setSalesPersonData] = useState({
    name: 'John Doe',
    account: 'ABC Corporation',
    contract: 'Contract #001',
    salesCommissionRate: 5.0, // Percentage rate
  });

  const [isEditing, setIsEditing] = useState(false);
  const [newCommissionRate, setNewCommissionRate] = useState(
    salesPersonData.salesCommissionRate
  );

  const handleCommissionRateChange = (e) => {
    setNewCommissionRate(e.target.value);
  };

  const handleSaveCommissionRate = () => {
    setSalesPersonData((prevData) => ({
      ...prevData,
      salesCommissionRate: parseFloat(newCommissionRate),
    }));
    setIsEditing(false);
  };

  return (
    <div className='max-w-4xl payback mx-auto p-6 space-y-6'>
      <h2 className='text-2xl font-semibold text-center'>
        Sales Person Screen
      </h2>

      {/* Sales Person Information */}
      <div className='bg-white p-6 shadow-lg rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <p className='font-medium text-gray-700'>
              Sales Person Name: {salesPersonData.name}
            </p>
            <p className='text-gray-600'>Account: {salesPersonData.account}</p>
            <p className='text-gray-600'>
              Contract: {salesPersonData.contract}
            </p>
          </div>
          <div>
            <p className='text-gray-600'>
              Sales Commission Rate:{' '}
              {isEditing ? (
                <input
                  type='number'
                  value={newCommissionRate}
                  onChange={handleCommissionRateChange}
                  className='w-24 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />
              ) : (
                `${salesPersonData.salesCommissionRate}%`
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-between mt-4'>
        {isEditing ? (
          <>
            <button
              onClick={handleSaveCommissionRate}
              className='bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              Save Commission Rate
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className='bg-gray-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500'
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className='bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            Edit Commission Rate
          </button>
        )}
      </div>
    </div>
  );
};

export default SalesPersonScreen;
