import React, { useState } from 'react';
import '../../src/Background.css';

const InvoiceScreen = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: 'INV12345',
    accountName: 'Jane Doe',
    salesPerson: 'John Smith',
    contract: 'Contract #001',
    referencePayment: 'Ref #B4567',
    salesCommission: 100,
    totalAmount: 1500,
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
      setInvoiceData((prevData) => ({
        ...prevData,
        salesPerson: newSalesPerson,
      }));
      setNewSalesPerson('');
      setIsPasswordPromptVisible(false);
    }
  };

  const handleVoidInvoice = () => {
    if (isUserAllowed) {
      setInvoiceData((prevData) => ({ ...prevData, totalAmount: 0 }));
      setIsPasswordPromptVisible(false);
    }
  };

  return (
    <div className='max-w-4xl  mx-auto payback p-6 space-y-6'>
      <h2 className='text-2xl font-semibold text-center'>Invoice Screen</h2>

      {/* Invoice Information */}
      <div className='bg-white p-6 shadow-lg rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <p className='font-medium text-gray-700'>
              Invoice Number: {invoiceData.invoiceNumber}
            </p>
            <p className='text-gray-600'>Account: {invoiceData.accountName}</p>
            <p className='text-gray-600'>Contract: {invoiceData.contract}</p>
            <p className='text-gray-600'>
              Reference Payment: {invoiceData.referencePayment}
            </p>
          </div>
          <div>
            <p className='text-gray-600'>
              Sales Person: {invoiceData.salesPerson}
            </p>
            <p className='text-gray-600'>
              Sales Commission: ${invoiceData.salesCommission}
            </p>
            <p className='font-bold text-gray-700'>
              Total: ${invoiceData.totalAmount}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons for Sales Person Change or Void Invoice */}
      <div className='flex justify-between mt-4'>
        <button
          onClick={() => setIsPasswordPromptVisible(true)}
          className='bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
        >
          Change Sales Person / Void Invoice
        </button>
      </div>

      {/* Password Prompt */}
      {isPasswordPromptVisible && !isUserAllowed && (
        <div className='mt-4 bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto'>
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
              className='bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
            >
              Submit
            </button>
            <button
              onClick={() => setIsPasswordPromptVisible(false)}
              className='bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
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
            className='mt-4 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            Change Sales Person
          </button>
        </div>
      )}

      {/* Void Invoice */}
      {isUserAllowed && (
        <div className='mt-6 bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto'>
          <h3 className='text-xl font-semibold text-center'>Void Invoice</h3>
          <p className='text-sm text-gray-600'>
            Are you sure you want to void this invoice?
          </p>
          <button
            onClick={handleVoidInvoice}
            className='mt-4 w-full bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
          >
            Void Invoice
          </button>
        </div>
      )}
    </div>
  );
};

export default InvoiceScreen;
