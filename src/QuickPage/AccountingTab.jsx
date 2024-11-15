import React, { useState } from 'react';

const AccountingTab = () => {
  const [accountId, setAccountId] = useState('');

  return (
    <div className='p-4'>
      <h2 className='text-lg font-semibold'>Accounting</h2>

      {/* Account ID */}
      <div className='mt-4'>
        <label className='block text-sm font-medium'>Account ID</label>
        <input
          type='text'
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
          placeholder='Enter Account ID'
          className='w-full p-2 mt-1 border rounded-md'
        />
      </div>

      {/* Financial Summary */}
      <div className='mt-6'>
        <h3 className='mb-2 text-sm font-medium'>Financial Summary</h3>
        <ul className='space-y-2'>
          <li className='flex justify-between p-2 bg-gray-100 rounded-md'>
            <span>Total Revenue</span>
            <span>$0.00</span>
          </li>
          <li className='flex justify-between p-2 bg-gray-100 rounded-md'>
            <span>Pending Invoices</span>
            <span>$0.00</span>
          </li>
          <li className='flex justify-between p-2 bg-gray-100 rounded-md'>
            <span>Total Expenses</span>
            <span>$0.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountingTab;
