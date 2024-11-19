import React, { useState } from 'react';
import '../../src/Background.css';

const ReceiveItems = () => {
  const [receivedItems, setReceivedItems] = useState([]);
  const [itemInput, setItemInput] = useState({
    itemName: '',
    quantity: '',
    serialNumber: '',
    site: '',
    poNumber: '',
  });

  const handleItemInputChange = (e) => {
    const { name, value } = e.target;
    setItemInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemInput.itemName && itemInput.quantity) {
      setReceivedItems((prev) => [...prev, { ...itemInput, id: Date.now() }]);
      setItemInput({
        itemName: '',
        quantity: '',
        serialNumber: '',
        site: '',
        poNumber: '',
      });
    }
  };

  return (
    <div className='max-w-4xl payback mx-auto p-4'>
      <div className='bg-white bg-opacity-90 p-6 rounded-md shadow-md'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>
          Receive Items
        </h2>

        <form onSubmit={handleAddItem} className='space-y-4'>
          {/* Item Name */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Item Name
            </label>
            <input
              type='text'
              name='itemName'
              value={itemInput.itemName}
              onChange={handleItemInputChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
          </div>

          {/* Quantity */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Quantity
            </label>
            <input
              type='number'
              name='quantity'
              value={itemInput.quantity}
              onChange={handleItemInputChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
          </div>

          {/* Serial Number (Optional) */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Serial Number (Optional)
            </label>
            <input
              type='text'
              name='serialNumber'
              value={itemInput.serialNumber}
              onChange={handleItemInputChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          {/* Site */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Site
            </label>
            <input
              type='text'
              name='site'
              value={itemInput.site}
              onChange={handleItemInputChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
              required
            />
          </div>

          {/* PO Number (Optional) */}
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              PO Number (Optional)
            </label>
            <input
              type='text'
              name='poNumber'
              value={itemInput.poNumber}
              onChange={handleItemInputChange}
              className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          </div>

          {/* Add Item Button */}
          <button
            type='submit'
            className='w-full mt-4 py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          >
            Add Item
          </button>
        </form>

        {/* Display Received Items */}
        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-center mb-4'>
            Received Items
          </h3>
          <ul className='space-y-2'>
            {receivedItems.map((item) => (
              <li
                key={item.id}
                className='p-4 border border-gray-200 rounded-lg shadow-sm'
              >
                <p className='text-lg font-semibold'>{item.itemName}</p>
                <p className='text-sm text-gray-600'>
                  Quantity: {item.quantity}
                </p>
                {item.serialNumber && (
                  <p className='text-sm text-gray-600'>
                    Serial: {item.serialNumber}
                  </p>
                )}
                <p className='text-sm text-gray-600'>Site: {item.site}</p>
                {item.poNumber && (
                  <p className='text-sm text-gray-600'>
                    PO Number: {item.poNumber}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReceiveItems;
