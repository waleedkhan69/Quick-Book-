import React, { useState } from 'react';
import '../../src/Background.css';
const PayReceiveScreen = () => {
  const [account, setAccount] = useState('');
  const [memo, setMemo] = useState('');
  const [amount, setAmount] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionData = {
      account,
      memo,
      amount,
      remarks,
    };
    console.log('Transaction Data:', transactionData);
    resetForm();
  };

  const resetForm = () => {
    setAccount('');
    setMemo('');
    setAmount('');
    setRemarks('');
  };

  return (
    <div className='payback max-w-3xl  mx-auto p-6  shadow-md rounded-lg space-y-6'>
      <h2 className='text-2xl font-semibold text-center'>
        Pay / Receive Screen
      </h2>

      {/* Pay/Receive Form */}
      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Account Field */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Account
          </label>
          <input
            type='text'
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Enter account'
            required
          />
        </div>

        {/* Memo Field */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Memo
          </label>
          <input
            type='text'
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Enter memo'
            required
          />
        </div>

        {/* Amount Field */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Amount
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Enter amount'
            required
          />
        </div>

        {/* Remarks Field */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Remarks
          </label>
          <textarea
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Enter remarks'
            rows='3'
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className='flex justify-end'>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayReceiveScreen;
