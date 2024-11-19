import React, { useState } from 'react';
import '../../src/Background.css';

const ContractScreen = () => {
  // State to manage contract details
  const [contractNumber, setContractNumber] = useState('');
  const [remarks, setRemarks] = useState('');
  const [startDate, setStartDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [amount, setAmount] = useState('');
  const [active, setActive] = useState(false);
  const [attachedDocuments, setAttachedDocuments] = useState(null);

  // Handle file change (for document uploads)
  const handleFileChange = (event) => {
    setAttachedDocuments(event.target.files[0]);
  };

  // Handle form submission (for generating contract)
  const handleGenerateContract = (e) => {
    e.preventDefault();
    const contractData = {
      contractNumber,
      remarks,
      startDate,
      expirationDate,
      amount,
      active,
      attachedDocuments,
    };
    // Handle contract generation logic (e.g., save to backend or local state)
    console.log('Contract Generated:', contractData);
    resetForm();
  };

  // Reset form after generating contract
  const resetForm = () => {
    setContractNumber('');
    setRemarks('');
    setStartDate('');
    setExpirationDate('');
    setAmount('');
    setActive(false);
    setAttachedDocuments(null);
  };

  return (
    <div className='max-w-4xl payback mx-auto  p-6 space-y-6'>
      <h2 className='text-2xl font-semibold text-center'>Generate Contract</h2>

      {/* Contract Details Form */}
      <form
        onSubmit={handleGenerateContract}
        className='bg-white p-6 shadow-lg rounded-lg'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Contract Number
            </label>
            <input
              type='text'
              value={contractNumber}
              onChange={(e) => setContractNumber(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Contract #'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Amount
            </label>
            <input
              type='number'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Amount'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Start Date
            </label>
            <input
              type='date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Expiration Date
            </label>
            <input
              type='date'
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
          </div>

          <div className='col-span-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Remarks
            </label>
            <textarea
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter any remarks'
            />
          </div>

          <div className='col-span-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Attached Documents
            </label>
            <input
              type='file'
              onChange={handleFileChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          <div className='col-span-2 flex items-center'>
            <input
              type='checkbox'
              checked={active}
              onChange={() => setActive(!active)}
              className='mr-2'
            />
            <label className='text-sm text-gray-700'>Active Contract</label>
          </div>
        </div>

        {/* Generate Button */}
        <div className='flex justify-end mt-6'>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Generate Contract
          </button>
        </div>
      </form>

      {/* Display Saved Contract Data (for demonstration purposes) */}
      <div className='bg-white p-6 shadow-lg rounded-lg mt-6'>
        <h3 className='text-xl font-semibold'>Generated Contracts</h3>
        <div className='mt-4'>
          <ul>
            {/* Example: You can render saved contracts here */}
            <li className='py-2 border-b'>
              <strong>Contract #:</strong> 12345 <br />
              <strong>Remarks:</strong> This is a contract for services. <br />
              <strong>Amount:</strong> $1000 <br />
              <strong>Start Date:</strong> 01/01/2024 <br />
              <strong>Expiration Date:</strong> 01/01/2025 <br />
              <strong>Status:</strong> Active
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContractScreen;
