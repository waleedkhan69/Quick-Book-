import React, { useState } from 'react';
import '../../src/Background.css';

const QuoteEstimateScreen = () => {
  const [quoteData, setQuoteData] = useState({
    quoteNumber: 'Q12345',
    accountName: 'John Doe',
    salesPerson: 'Jane Smith',
    contract: 'Contract #001',
    referencePayment: 'Ref #A1234',
    totalAmount: 500,
  });

  const [isPasswordPromptVisible, setIsPasswordPromptVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [isUserAllowed, setIsUserAllowed] = useState(false);
  const [newSalesPerson, setNewSalesPerson] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmitPassword = () => {
    if (password === 'admin123') {
      setIsUserAllowed(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password');
    }
  };

  const handleChangeSalesPerson = () => {
    if (isUserAllowed) {
      setQuoteData((prevData) => ({
        ...prevData,
        salesPerson: newSalesPerson,
      }));
      setNewSalesPerson('');
      setIsPasswordPromptVisible(false);
    }
  };

  const handleVoidQuote = () => {
    if (isUserAllowed) {
      setQuoteData((prevData) => ({ ...prevData, totalAmount: 0 }));
      setIsPasswordPromptVisible(false);
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-6 space-y-6 payback'>
      <h2 className='text-2xl font-semibold text-center'>
        Quote / Estimate Screen
      </h2>

      {/* Quote Information */}
      <div className='bg-white opacity-90 p-4 shadow rounded-lg'>
        <div className='flex justify-between'>
          <p className='font-medium text-gray-700'>
            Quote Number: {quoteData.quoteNumber}
          </p>
          <p className='font-medium text-gray-700'>
            Account: {quoteData.accountName}
          </p>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-gray-600'>Sales Person: {quoteData.salesPerson}</p>
          <p className='text-gray-600'>Contract: {quoteData.contract}</p>
        </div>
        <div className='flex justify-between mt-2'>
          <p className='text-gray-600'>
            Reference Payment: {quoteData.referencePayment}
          </p>
          <p className='font-bold text-gray-700'>
            Total: ${quoteData.totalAmount}
          </p>
        </div>
      </div>

      {/* Action Buttons for Sales Person Change or Void */}
      <div className='flex justify-between mt-4'>
        <button
          onClick={() => setIsPasswordPromptVisible(true)}
          className='bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        >
          Change Sales Person / Void Quote
        </button>
      </div>

      {/* Password Prompt */}
      {isPasswordPromptVisible && !isUserAllowed && (
        <div className='mt-4 bg-white opacity-90 p-6 shadow-lg rounded-lg max-w-md mx-auto'>
          <h3 className='text-xl font-semibold text-center'>Enter Password</h3>
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Enter your password'
            className='mt-4 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          {errorMessage && (
            <p className='text-red-500 text-sm mt-2 text-center'>
              {errorMessage}
            </p>
          )}
          <div className='flex justify-center mt-4 space-x-4'>
            <button
              onClick={handleSubmitPassword}
              className='bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              Submit
            </button>
            <button
              onClick={() => setIsPasswordPromptVisible(false)}
              className='bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Sales Person Change */}
      {isUserAllowed && (
        <div className='mt-6 bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto'>
          <h3 className='text-xl font-semibold text-center'>
            Change Sales Person
          </h3>
          <input
            type='text'
            value={newSalesPerson}
            onChange={(e) => setNewSalesPerson(e.target.value)}
            placeholder="Enter new sales person's name"
            className='mt-4 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
          <button
            onClick={handleChangeSalesPerson}
            className='mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            Change Sales Person
          </button>
        </div>
      )}

      {/* Void Quote */}
      {isUserAllowed && (
        <div className='mt-6 bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto'>
          <h3 className='text-xl font-semibold text-center'>Void Quote</h3>
          <p className='text-sm text-gray-600'>
            Are you sure you want to void the quote?
          </p>
          <button
            onClick={handleVoidQuote}
            className='mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
          >
            Void Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default QuoteEstimateScreen;
