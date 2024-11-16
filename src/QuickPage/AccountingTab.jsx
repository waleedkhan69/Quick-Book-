import React, { useState } from 'react';

const AccountingTab = () => {
  const [accountId, setAccountId] = useState('');
  const [financialData, setFinancialData] = useState(null);
  const [error, setError] = useState('');

  // Simulated financial data for different accounts
  const dummyData = {
    ACC123: {
      revenue: 5000.0,
      invoices: 1200.0,
      expenses: 3000.0,
    },
    ACC456: {
      revenue: 10000.0,
      invoices: 2000.0,
      expenses: 7000.0,
    },
  };

  // Fetch financial data based on Account ID
  const fetchFinancialData = () => {
    if (!accountId.trim()) {
      setError('Please enter a valid Account ID.');
      return;
    }

    const data = dummyData[accountId];
    if (data) {
      setFinancialData(data);
      setError('');
    } else {
      setFinancialData(null);
      setError('No data found for the provided Account ID.');
    }
  };

  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Accounting</h2>

      {/* Account ID Input */}
      <div className='mt-4'>
        <label className='block text-sm font-medium'>Account ID</label>
        <input
          type='text'
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          placeholder='Enter Account ID'
          className='w-full p-2 mt-1 border rounded-md'
        />
        <button
          onClick={fetchFinancialData}
          className='px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-md'
        >
          Fetch Summary
        </button>
      </div>

      {/* Error Message */}
      {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}

      {/* Financial Summary */}
      <div className='mt-6'>
        <h3 className='mb-2 text-sm font-medium'>Financial Summary</h3>
        {financialData ? (
          <ul className='space-y-2'>
            <li className='flex justify-between p-2 bg-gray-100 rounded-md'>
              <span>Total Revenue</span>
              <span>${financialData.revenue.toFixed(2)}</span>
            </li>
            <li className='flex justify-between p-2 bg-gray-100 rounded-md'>
              <span>Pending Invoices</span>
              <span>${financialData.invoices.toFixed(2)}</span>
            </li>
            <li className='flex justify-between p-2 bg-gray-100 rounded-md'>
              <span>Total Expenses</span>
              <span>${financialData.expenses.toFixed(2)}</span>
            </li>
          </ul>
        ) : (
          <p className='text-sm text-gray-500'>No financial data available.</p>
        )}
      </div>
    </div>
  );
};

export default AccountingTab;
