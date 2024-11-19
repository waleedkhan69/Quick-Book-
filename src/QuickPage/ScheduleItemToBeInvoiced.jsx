import React, { useState } from 'react';
import '../../src/Background.css';

const ScheduleItemToBeInvoiced = () => {
  const [scheduleItems, setScheduleItems] = useState([]);
  const [customer, setCustomer] = useState('');
  const [contract, setContract] = useState('');
  const [date, setDate] = useState('nextInvoice');
  const [customDate, setCustomDate] = useState('');

  const [newItem, setNewItem] = useState({
    itemName: '',
    quantity: 1,
    discount: 0,
    adjustment: 0,
    shippingCost: 0,
    price: 0,
  });

  const handleAddItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        ...newItem,
        date: date === 'nextInvoice' ? 'Next Invoice Date' : customDate,
      },
    ]);
    setNewItem({
      itemName: '',
      quantity: 1,
      discount: 0,
      adjustment: 0,
      shippingCost: 0,
      price: 0,
    });
    setCustomDate('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  return (
    <div className='max-w-4xl mx-auto payback p-6 space-y-6'>
      <h2 className='text-2xl font-semibold text-center'>
        Schedule Item to be Invoiced
      </h2>

      {/* Customer and Contract Section */}
      <div className='bg-white p-6 shadow-lg rounded-lg'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Customer
            </label>
            <select
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value=''>Select Customer</option>
              <option value='customer1'>Customer 1</option>
              <option value='customer2'>Customer 2</option>
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Contract
            </label>
            <select
              value={contract}
              onChange={(e) => setContract(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              <option value=''>Select Contract</option>
              <option value='contract1'>Contract 1</option>
              <option value='contract2'>Contract 2</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items Section */}
      <div className='bg-white p-6 shadow-lg rounded-lg'>
        <h3 className='text-xl font-semibold'>Add Items</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Item Name
            </label>
            <input
              type='text'
              name='itemName'
              value={newItem.itemName}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Item Name'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Quantity
            </label>
            <input
              type='number'
              name='quantity'
              value={newItem.quantity}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              min='1'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Price
            </label>
            <input
              type='number'
              name='price'
              value={newItem.price}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              min='0'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Discount
            </label>
            <input
              type='number'
              name='discount'
              value={newItem.discount}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              min='0'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Adjustment
            </label>
            <input
              type='number'
              name='adjustment'
              value={newItem.adjustment}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              min='0'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Shipping Cost
            </label>
            <input
              type='number'
              name='shippingCost'
              value={newItem.shippingCost}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500'
              min='0'
            />
          </div>
        </div>
      </div>

      {/* Date Selection */}
      <div className='bg-white p-6 shadow-lg rounded-lg'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Invoice Date
          </label>
          <div className='flex space-x-4'>
            <div className='flex items-center'>
              <input
                type='radio'
                name='date'
                value='nextInvoice'
                checked={date === 'nextInvoice'}
                onChange={() => setDate('nextInvoice')}
                className='h-4 w-4 text-indigo-600'
              />
              <label className='ml-2 text-gray-700'>Next Invoice</label>
            </div>
            <div className='flex items-center'>
              <input
                type='radio'
                name='date'
                value='customDate'
                checked={date === 'customDate'}
                onChange={() => setDate('customDate')}
                className='h-4 w-4 text-indigo-600'
              />
              <label className='ml-2 text-gray-700'>Custom Date</label>
            </div>
          </div>
          {date === 'customDate' && (
            <input
              type='date'
              value={customDate}
              onChange={(e) => setCustomDate(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            />
          )}
        </div>
      </div>

      {/* Add Item Button */}
      <div className='flex justify-end'>
        <button
          onClick={handleAddItem}
          className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Add Item to Schedule
        </button>
      </div>

      {/* Display Schedule Items */}
      <div className='bg-white p-6 shadow-lg rounded-lg mt-6'>
        <h3 className='text-xl font-semibold'>Scheduled Items</h3>
        <div className='mt-4'>
          {scheduleItems.length > 0 ? (
            <table className='w-full table-auto mt-4 border-collapse'>
              <thead>
                <tr>
                  <th className='border px-4 py-2'>Item</th>
                  <th className='border px-4 py-2'>Quantity</th>
                  <th className='border px-4 py-2'>Discount</th>
                  <th className='border px-4 py-2'>Adjustment</th>
                  <th className='border px-4 py-2'>Shipping Cost</th>
                  <th className='border px-4 py-2'>Price</th>
                  <th className='border px-4 py-2'>Date</th>
                </tr>
              </thead>
              <tbody>
                {scheduleItems.map((item, index) => (
                  <tr key={index}>
                    <td className='border px-4 py-2'>{item.itemName}</td>
                    <td className='border px-4 py-2'>{item.quantity}</td>
                    <td className='border px-4 py-2'>{item.discount}</td>
                    <td className='border px-4 py-2'>{item.adjustment}</td>
                    <td className='border px-4 py-2'>{item.shippingCost}</td>
                    <td className='border px-4 py-2'>{item.price}</td>
                    <td className='border px-4 py-2'>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className='text-gray-500'>No items scheduled yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItemToBeInvoiced;
