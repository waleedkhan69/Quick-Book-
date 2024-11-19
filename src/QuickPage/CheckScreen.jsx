import React, { useState } from 'react';
import '../../src/Background.css';

const CheckScreen = () => {
  // State to manage check details
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [savedTemplates, setSavedTemplates] = useState([]);

  // Handle saving template
  const handleSaveTemplate = () => {
    if (!templateName) {
      alert('Please enter a template name.');
      return;
    }
    const template = {
      name: templateName,
      payee,
      amount,
      memo,
    };
    setSavedTemplates([...savedTemplates, template]);
    resetForm();
  };

  // Handle loading template
  const handleLoadTemplate = (template) => {
    setPayee(template.payee);
    setAmount(template.amount);
    setMemo(template.memo);
  };

  // Reset the form
  const resetForm = () => {
    setPayee('');
    setAmount('');
    setMemo('');
    setTemplateName('');
  };

  return (
    <div className='max-w-4xl payback mx-auto p-6 space-y-6'>
      <h2 className='text-2xl font-semibold text-center'>Check Screen</h2>

      {/* Check Details Form */}
      <div className='bg-white p-6 shadow-lg rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Payee
            </label>
            <input
              type='text'
              value={payee}
              onChange={(e) => setPayee(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Payee Name'
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
            />
          </div>

          <div className='col-span-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Memo
            </label>
            <input
              type='text'
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Memo'
            />
          </div>

          <div className='col-span-2'>
            <label className='block text-sm font-medium text-gray-700'>
              Template Name
            </label>
            <input
              type='text'
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Template Name (Optional)'
            />
          </div>
        </div>
      </div>

      {/* Save and Reset Buttons */}
      <div className='flex space-x-4 justify-end'>
        <button
          onClick={handleSaveTemplate}
          className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Save Template
        </button>
        <button
          onClick={resetForm}
          className='bg-gray-400 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300'
        >
          Reset
        </button>
      </div>

      {/* Saved Templates Section */}
      <div className='bg-white p-6 shadow-lg rounded-lg mt-6'>
        <h3 className='text-xl font-semibold'>Saved Templates</h3>
        <div className='mt-4'>
          {savedTemplates.length > 0 ? (
            <ul>
              {savedTemplates.map((template, index) => (
                <li
                  key={index}
                  className='flex justify-between items-center py-2 border-b'
                >
                  <div>
                    <strong>{template.name}</strong>
                    <p className='text-sm text-gray-500'>
                      Payee: {template.payee}
                    </p>
                    <p className='text-sm text-gray-500'>
                      Amount: {template.amount}
                    </p>
                    <p className='text-sm text-gray-500'>
                      Memo: {template.memo}
                    </p>
                  </div>
                  <button
                    onClick={() => handleLoadTemplate(template)}
                    className='text-blue-600 hover:text-blue-800'
                  >
                    Load
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-gray-500'>No templates saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckScreen;
