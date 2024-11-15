import React from 'react';

const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className='flex space-x-4 border-b'>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`p-2 text-sm font-medium ${
            activeTab === tab
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500'
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
