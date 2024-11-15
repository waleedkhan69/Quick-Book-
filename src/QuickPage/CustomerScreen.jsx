import React, { useState } from 'react';
import Tabs from '../component/QuickBook/Tabs';
import CustomerForm from '../component/QuickBook/CustomerForm';
import LocationTab from './LocationTab';
import DocumentsTab from './DocumentsTab';
import AccountingTab from './AccountingTab';
import PortalTab from './PortalTab';

const CustomerScreen = () => {
  const [activeTab, setActiveTab] = useState('Customer Details');
  const [isActive, setIsActive] = useState(false);

  const tabs = [
    'Customer Details',
    'Location',
    'Documents',
    'Accounting',
    'Portal',
  ];

  return (
    <div className='max-w-6xl mx-auto p-6 bg-gray-100 rounded-md shadow-md space-y-6'>
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />

      {/* Content Area */}
      <div className='p-6 bg-white rounded-md shadow-md'>
        {activeTab === 'Customer Details' && (
          <div className='space-y-6'>
            <CustomerForm />
            <div className='flex items-center space-x-4'>
              <span className='text-lg font-medium'>Is Active:</span>
              <div
                onClick={() => setIsActive(!isActive)}
                className={`w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition ${
                  isActive ? 'bg-green-500' : ''
                }`}
              >
                <div
                  className={`h-5 w-5 bg-white rounded-full shadow-md transform transition ${
                    isActive ? 'translate-x-7' : ''
                  }`}
                ></div>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'Location' && <LocationTab />}
        {activeTab === 'Documents' && <DocumentsTab />}
        {activeTab === 'Accounting' && <AccountingTab />}
        {activeTab === 'Portal' && <PortalTab />}
      </div>

      {/* Save Button */}
      <div className='flex justify-end'>
        <button className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md shadow'>
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomerScreen;
