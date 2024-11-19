import React, { useState } from 'react';
import '../../src/Background.css';

const PortalTab = () => {
  const [portalEnabled, setPortalEnabled] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='p-4 payback'>
      <h2 className='text-lg font-semibold'>Portal Access</h2>

      {/* Enable Portal */}
      <div className='flex items-center mt-4'>
        <label className='mr-4 text-sm font-medium'>Allow Portal?</label>
        <input
          type='checkbox'
          checked={portalEnabled}
          onChange={() => setPortalEnabled(!portalEnabled)}
          className='w-5 h-5 text-blue-500 border-gray-300 rounded'
        />
      </div>

      {/* Portal Settings */}
      {portalEnabled && (
        <div className='mt-4 space-y-4'>
          <div>
            <label className='block text-sm font-medium'>Expires On</label>
            <input
              type='date'
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className='w-full p-2 mt-1 border rounded-md'
            />
          </div>

          <div>
            <label className='block text-sm font-medium'>Username</label>
            <input
              type='text'
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder='Enter username'
              className='w-full p-2 mt-1 border rounded-md'
            />
          </div>

          <div>
            <label className='block text-sm font-medium'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter password'
              className='w-full p-2 mt-1 border rounded-md'
            />
          </div>

          <div>
            <label className='block text-sm font-medium'>Validation Code</label>
            <input
              type='text'
              placeholder='Enter validation code'
              className='w-full p-2 mt-1 border rounded-md'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortalTab;
