import React, { useState } from 'react';
import '../../src/Background.css';

const AccountScreen = () => {
  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [nestedLevels, setNestedLevels] = useState([
    { level: 1, subAccount: '' },
  ]);

  // Handle change in nested account inputs
  const handleNestedChange = (index, value) => {
    const updatedLevels = [...nestedLevels];
    updatedLevels[index].subAccount = value;
    setNestedLevels(updatedLevels);
  };

  // Add a new level up to 7 levels deep
  const addNestedLevel = () => {
    if (nestedLevels.length < 7) {
      setNestedLevels([
        ...nestedLevels,
        { level: nestedLevels.length + 1, subAccount: '' },
      ]);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const accountData = {
      accountName,
      accountType,
      nestedLevels,
    };
    console.log('Account Data:', accountData);
    resetForm();
  };

  // Reset the form
  const resetForm = () => {
    setAccountName('');
    setAccountType('');
    setNestedLevels([{ level: 1, subAccount: '' }]);
  };

  return (
    <div className='max-w-4xl payback mx-auto p-6 space-y-6'>
      <h2 className='text-2xl font-semibold text-center'>
        Control Account Costs
      </h2>

      {/* Account Details Form */}
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 shadow-lg rounded-lg'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Account Name */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Account Name
            </label>
            <input
              type='text'
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter account name'
              required
            />
          </div>

          {/* Account Type */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Account Type
            </label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            >
              <option value='' disabled>
                Select type
              </option>
              <option value='income'>Income</option>
              <option value='expenses'>Expenses</option>
            </select>
          </div>
        </div>

        {/* Nested Levels */}
        <div className='mt-6'>
          <h3 className='text-lg font-medium mb-4'>
            Sub-Accounts (up to 7 levels)
          </h3>
          {nestedLevels.map((level, index) => (
            <div key={index} className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Level {level.level} Sub-Account
              </label>
              <input
                type='text'
                value={level.subAccount}
                onChange={(e) => handleNestedChange(index, e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
                placeholder={`Enter sub-account for level ${level.level}`}
              />
            </div>
          ))}

          {nestedLevels.length < 7 && (
            <button
              type='button'
              onClick={addNestedLevel}
              className='mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400'
            >
              Add Level
            </button>
          )}
        </div>

        {/* Submit Button */}
        <div className='flex justify-end mt-6'>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Save Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountScreen;
