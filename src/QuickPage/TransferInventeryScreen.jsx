import React, { useState } from 'react';
import '../../src/Background.css';

const TransfersInventoryScreen = () => {
  const [transfers, setTransfers] = useState([
    {
      id: 1,
      item: '',
      from: '',
      to: '',
      date: '',
      quantity: '',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newTransfer, setNewTransfer] = useState({
    item: '',
    from: '',
    to: '',
    date: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransfer({ ...newTransfer, [name]: value });
  };

  const handleAddTransfer = () => {
    setShowForm(true); // Show the form when the button is clicked
  };

  const handleSubmitTransfer = () => {
    if (
      newTransfer.item &&
      newTransfer.from &&
      newTransfer.to &&
      newTransfer.date &&
      newTransfer.quantity
    ) {
      setTransfers([...transfers, { ...newTransfer, id: Date.now() }]);
      setNewTransfer({ item: '', from: '', to: '', date: '', quantity: '' });
      setShowForm(false); // Close the form after submission
    }
  };

  const handleCancel = () => {
    setNewTransfer({ item: '', from: '', to: '', date: '', quantity: '' });
    setShowForm(false); // Close the form without submission
  };

  return (
    <div className='min-h-screen payback p-6'>
      <div className='max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 bg-opacity-90'>
        <h1 className='text-2xl font-bold mb-4 text-gray-700'>
          Transfers Inventory
        </h1>

        {/* Add Transfer Button */}
        {!showForm && (
          <button
            onClick={handleAddTransfer}
            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-6'
          >
            Add Transfer
          </button>
        )}

        {/* Inventory Form */}
        {showForm && (
          <div className='bg-gray-50 p-4 rounded-lg mb-6'>
            <h2 className='text-xl font-semibold mb-4 text-gray-600'>
              New Transfer
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
              <input
                type='text'
                name='item'
                placeholder='Item Name'
                value={newTransfer.item}
                onChange={handleInputChange}
                className='border rounded-lg p-2 text-gray-700'
              />
              <input
                type='text'
                name='from'
                placeholder='From Warehouse'
                value={newTransfer.from}
                onChange={handleInputChange}
                className='border rounded-lg p-2 text-gray-700'
              />
              <input
                type='text'
                name='to'
                placeholder='To Warehouse'
                value={newTransfer.to}
                onChange={handleInputChange}
                className='border rounded-lg p-2 text-gray-700'
              />
              <input
                type='date'
                name='date'
                value={newTransfer.date}
                onChange={handleInputChange}
                className='border rounded-lg p-2 text-gray-700'
              />
              <input
                type='number'
                name='quantity'
                placeholder='Quantity'
                value={newTransfer.quantity}
                onChange={handleInputChange}
                className='border rounded-lg p-2 text-gray-700'
              />
            </div>
            <div className='flex justify-end space-x-4 mt-4'>
              <button
                onClick={handleCancel}
                className='bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600'
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitTransfer}
                className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600'
              >
                Save Transfer
              </button>
            </div>
          </div>
        )}

        {/* Inventory Table */}
        <div>
          <h2 className='text-xl font-semibold mb-4 text-gray-600'>
            Transfer Records
          </h2>
          <div className='overflow-auto'>
            <table className='w-full border-collapse border border-gray-300'>
              <thead className='bg-gray-200'>
                <tr>
                  <th className='border p-2 text-left text-gray-700'>Item</th>
                  <th className='border p-2 text-left text-gray-700'>From</th>
                  <th className='border p-2 text-left text-gray-700'>To</th>
                  <th className='border p-2 text-left text-gray-700'>Date</th>
                  <th className='border p-2 text-left text-gray-700'>
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => (
                  <tr key={transfer.id} className='hover:bg-gray-100'>
                    <td className='border p-2'>{transfer.item}</td>
                    <td className='border p-2'>{transfer.from}</td>
                    <td className='border p-2'>{transfer.to}</td>
                    <td className='border p-2'>{transfer.date}</td>
                    <td className='border p-2'>{transfer.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransfersInventoryScreen;
